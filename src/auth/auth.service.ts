import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../@generated/user/user.model';
import { LoginResult, LoginUserInput } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { compareSync } from 'bcrypt';
import { isEmail, isEmpty, minLength } from 'class-validator';
import { BaseResult } from 'src/models/base-error.dto';
import { MailService } from 'src/services/providers/mail/mail.service';
import { hashSync } from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService)) private usersService: UserService,
    private jwtService: JwtService,
    private mailService: MailService,
    private prismaService: PrismaService
  ) { }

  // TODO Trocar o retorno de undefined para uma interface de erro.
  async validateUserByPassword(
    loginAttempt: LoginUserInput,
  ): Promise<LoginResult | undefined> {
    const { email, password } = loginAttempt;

    // TODO Retornar uma mensagem amigável de tratamento de erro.
    console.log('Initialize validation and sanitization');
    if (isEmpty(email)) return undefined;
    if (!isEmail(email)) return undefined;
    if (isEmpty(password)) return undefined;
    if (!minLength(password, 8)) return undefined;

    let userToAttempt: User | null = null;
    if (email) {
      userToAttempt = await this.usersService.user({
        where: { email: email },
      });
    }

    if (!userToAttempt) return undefined;

    let isMatch = false;
    try {
      isMatch = compareSync(password, userToAttempt.password);
    } catch (error) {
      return undefined;
    }

    //TODO Segregar a criação do JWT em uma função separada

    if (isMatch) {
      const token = this.createJwt(userToAttempt).token;
      const result: LoginResult = {
        user: userToAttempt,
        token,
      };
      return result;
    }

    return undefined;
  }

  async validateJwtPayload(payload: JwtPayload): Promise<User | undefined> {
    const user = await this.usersService.user({
      where: { email: payload.email },
    });

    if (user) {
      return user;
    }

    return undefined;
  }

  // TODO  Remover hard-code do JWT (Add .env)
  createJwt(user: User): { data: JwtPayload; token: string } {
    const expiresIn = 1000000;
    let expiration: Date | undefined;
    if (expiresIn) {
      expiration = new Date();
      expiration.setTime(expiration.getTime() + expiresIn * 1000);
    }
    const data: JwtPayload = {
      email: user.email,
      _id: String(user.id),
      expiration,
    };

    const jwt = this.jwtService.sign(data);

    return {
      data,
      token: jwt,
    };
  }

  async requestPasswordReset(email: string): Promise<BaseResult> {
    const user = await this.usersService.user({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        success: false,
        message: 'Usuário não encontrado, por favor verifique o email',
      };
    }

    const token = this.createJwt(user).token;

    const variables = {
      title: "Wesocial - Nova senha",
      passwordResetUrl: "https://localhost:3001/account/reset-password",
      passwordResetToken: token,
    };

    const wasSent = this.mailService.send({
      path: 'forgot_password',
      to: user.email,
      subject: 'WeSocial - Recuperação de senha',
      variables,
    });

    if (!wasSent) {
      return {
        success: false,
        message: 'Não foi possível enviar o email, caso o problema persista entre em contato com o suporte',
      };
    }

    return {
      success: true,
      message: 'Email enviado com sucesso, por favor verifique sua caixa de entrada',
    };
  }

  async resetPassword(token: string, password: string): Promise<BaseResult> {

    const payload = this.jwtService.verify(token)

    if (!payload) {
      return {
        success: false,
        message: 'Token inválido, por favor verifique o email, caso o problema persista entre em contato com o suporte',
      };
    }

    const user = await this.usersService.user({
      where: {
        id: Number(payload._id)
      },
    });


    if (!user) {
      return {
        success: false,
        message: 'Usuário não encontrado, por favor verifique o email ou entre em contato com o suporte',
      };
    }

    const isUpdated = await this.prismaService.user.update({
      where: {
        id: Number(payload._id)
      },
      data: {
        password: hashSync(password, 10)
      }
    })


    if (!isUpdated) {
      return {
        success: false,
        message: 'Não foi possível atualizar a senha, por favor tente novamente',
      };
    }
    return {
      success: true,
      message: 'Senha atualizada com sucesso',
    };

  }
}