import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "../../@generated/user/user.model";
import { LoginResult, LoginUserInput } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { compareSync } from "bcryptjs";
import { isEmail, isEmpty, minLength } from "class-validator";
import { BaseResult } from "src/models/base-error.dto";
import { MailService } from "src/services/providers/mail/mail.service";
import { hashSync } from "bcryptjs";
import { PrismaService } from "src/prisma.service";
import { LogAction } from "@prisma/client";
import { createLog } from "../services/create-log";
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService)) private usersService: UserService,
    private jwtService: JwtService,
    private mailService: MailService,
    private prismaService: PrismaService
  ) {}

  // TODO Trocar o retorno de undefined para uma interface de erro.
  async validateUserByPassword(
    loginAttempt: LoginUserInput,
    userId: number,
    ipAddress: string
  ): Promise<LoginResult | undefined> {
    const { email, password } = loginAttempt;

    // TODO Retornar uma mensagem amigável de tratamento de erro.
    console.log("🔐 Initialize validation and sanitization", { email: email?.substring(0, 10) + '...', passwordLength: password?.length });
    
    if (isEmpty(email)) {
      console.log("❌ Email is empty");
      return undefined;
    }
    if (!isEmail(email)) {
      console.log("❌ Email is not valid:", email);
      return undefined;
    }
    if (isEmpty(password)) {
      console.log("❌ Password is empty");
      return undefined;
    }
    if (!minLength(password, 8)) {
      console.log("❌ Password is too short:", password.length);
      return undefined;
    }

    let userToAttempt: User | null = null;
    if (email) {
      console.log("🔍 Searching for user with email:", email);
      userToAttempt = await this.usersService.user({
        where: { email: email },
      });
    }

    if (!userToAttempt) {
      console.log("❌ User not found for email:", email);
      return undefined;
    }

    console.log("✅ User found, comparing password...");
    let isMatch = false;
    try {
      isMatch = compareSync(password, userToAttempt.password);
      console.log("🔐 Password comparison result:", isMatch);
    } catch (error) {
      console.log("❌ Error comparing password:", error);
      return undefined;
    }
    //TODO Segregar a criação do JWT em uma função separada

    if (isMatch) {
      const token = this.createJwt(userToAttempt).token;
      const result: LoginResult = {
        user: userToAttempt,
        token,
      };
      //add log - usar o ID do usuário que fez login, não o userId do parâmetro
      const { randomUUID } = await import("crypto");
      try {
      await createLog({
        action: LogAction.USER_LOGIN,
          userId: userToAttempt.id, // Usar o ID do usuário que fez login
        details: `User ${userToAttempt.email} logged in successfully`,
        route: "/auth/login",
        metadata: {
            storageId: randomUUID(),
          ipAddress,
        },
      });
      } catch (logError) {
        // Não falhar o login se o log falhar
        console.error("⚠️ Failed to create login log:", logError);
      }

      console.log("✅ User validated successfully, returning result");

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
        message: "Usuário não encontrado, por favor verifique o email",
      };
    }

    const token = this.createJwt(user).token;

    const variables = {
      title: "Defined - Reset Your Password",
      token: token,
      year: new Date().getFullYear(),
    };

    const wasSent = await this.mailService.send({
      path: "forgot_password",
      to: user.email,
      subject: "Defined - Reset Your Password",
      variables,
    });

    if (!wasSent) {
      return {
        success: false,
        message:
          "Não foi possível enviar o email, caso o problema persista entre em contato com o suporte",
      };
    }

    return {
      success: true,
      message:
        "Email enviado com sucesso, por favor verifique sua caixa de entrada",
    };
  }

  async resetPassword(token: string, password: string): Promise<BaseResult> {
    const payload = this.jwtService.verify(token);

    if (!payload) {
      return {
        success: false,
        message:
          "Token inválido, por favor verifique o email, caso o problema persista entre em contato com o suporte",
      };
    }

    const user = await this.usersService.user({
      where: {
        id: Number(payload._id),
      },
    });

    if (!user) {
      return {
        success: false,
        message:
          "Usuário não encontrado, por favor verifique o email ou entre em contato com o suporte",
      };
    }

    const isUpdated = await this.prismaService.user.update({
      where: {
        id: Number(payload._id),
      },
      data: {
        password: hashSync(password, 10),
      },
    });

    if (!isUpdated) {
      return {
        success: false,
        message:
          "Não foi possível atualizar a senha, por favor tente novamente",
      };
    }
    return {
      success: true,
      message: "Senha atualizada com sucesso",
    };
  }

  async verifyEmail(token: string): Promise<BaseResult> {
    try {
      const payload = this.jwtService.verify(token);
      
      if (!payload || !payload._id) {
        return {
          success: false,
          message: "Token inválido ou expirado",
        };
      }

      const userId = Number(payload._id);
      const user = await this.prismaService.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return {
          success: false,
          message: "Usuário não encontrado",
        };
      }

      if (user.emailVerified) {
        return {
          success: true,
          message: "Email já estava verificado",
        };
      }

      await this.prismaService.user.update({
        where: { id: userId },
        data: { emailVerified: true },
      });

      return {
        success: true,
        message: "Email verificado com sucesso",
      };
    } catch (error) {
      console.error("Error verifying email:", error);
      return {
        success: false,
        message: "Token inválido ou expirado",
      };
    }
  }
}
