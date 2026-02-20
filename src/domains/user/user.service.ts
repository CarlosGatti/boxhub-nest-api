import { Prisma, User } from "@prisma/client";

import { BaseResult } from "src/shared/dto/base-error.dto";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { Injectable } from "@nestjs/common";
import { MailService } from "src/core/services/providers/mail/mail.service";
import { MeDto } from "./dto/me.dto";
import { PaginationArgs } from "src/shared/types/pagination.input";
import { PrismaService } from "../../core/prisma/prisma.service";
import { UserCreateInput } from "@generated/user/user-create.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { generate } from "generate-password";
import { hashSync } from "bcryptjs";

@Injectable()
export class UserService {
  constructor(
    private mailService: MailService,
    private readonly prismaService: PrismaService
  ) {}

  async users(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async user(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      ...args,
      include: {
        apps: {
          include: {
            app: true,
          },
        },
      },
    } as any);

    if (!user) {
      return null;
    }

    // Adiciona array de códigos de apps ao objeto user
    const userWithApps = {
      ...user,
      apps: (user as any).apps?.map((ua: any) => ua.app.code) || [],
    } as User & { apps: string[] };

    return userWithApps as any;
  }

  async me(user: User): Promise<MeDto> {
    const data = await this.prismaService.user.findUnique({
      where: { id: user.id },
      include: {
        storageMemberships: {
          include: {
            storage: true,
          },
        },
        apps: {
          include: {
            app: true,
          },
        },
      },
    } as any);

    if (!data) {
      throw new Error("User not found");
    }

    // Adiciona array de códigos de apps ao objeto
    const dataWithApps = {
      ...data,
      apps: (data as any).apps?.map((ua: any) => ua.app.code) || [],
    };

    return dataWithApps as MeDto;
  }

  async createUser(data: UserCreateInput): Promise<User> {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 14);

    // Busca o app DISCARD_ME para vincular automaticamente
    const discardMeApp = await (this.prismaService as any).app.findUnique({
      where: { code: 'DISCARD_ME' },
    });

    try {
      const user = await this.prismaService.user.create({
        data: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          nickname: data.nickname,
          password: hashSync(data.password, 10),
          profilePicture: data.profilePicture,
          public: data.public,
          apartment: (data as any).apartment,
          emailVerified: false, // Explicitly set to false - user must verify email
          expiresAt,
          willExpireAt: expiresAt,
          isPremium: false, // Default to false, can be updated later
          apps: discardMeApp
            ? {
                create: {
                  appId: discardMeApp.id,
                },
              }
            : undefined,
        } as any,
        include: {
          apps: {
            include: {
              app: true,
            },
          },
        } as any,
      });

      // Adiciona array de códigos de apps ao objeto user
      const userWithApps = {
        ...user,
        apps: (user as any).apps?.map((ua: any) => ua.app.code) || [],
      } as User & { apps: string[] };

      return userWithApps as any;
    } catch (error: any) {
      // Tratar erro de constraint única do Prisma (email já existe)
      // Este erro não deve acontecer se a verificação foi feita antes, mas trata por segurança
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw new Error(
          `An account with this email already exists. Please login instead.`
        );
      }
      throw error;
    }
  }

  async sendEmailVerification(user: User, token: string, appCode?: string): Promise<void> {
    // Use environment variable or default URL for logo
    const logoUrl = process.env.EMAIL_LOGO_URL || 'https://www.discart.me/static/email/img/logo-boxhub.png';
    // Link must point to FRONTEND - user lands there, frontend calls API (verifyEmail mutation) with the token
    const frontendUrl = process.env.FRONTEND_URL || 'https://www.carlosgatti.com';
    const verifyUrl = `${frontendUrl}/verify-email`;
    
    // Determinar o nome do app para o subject (opcional, pode ser genérico)
    const appName = appCode === 'QRACK' ? 'QRACK' : appCode === 'RH' ? 'RH Solution Center' : 'carlosgatti.com';
    const subject = appCode 
      ? `Verify Your Email Address - ${appName}`
      : "Verify Your Email Address - carlosgatti.com";
    
    const variables = {
      firstName: user.firstName,
      lastName: user.lastName,
      token: token,
      logoUrl: logoUrl,
      verifyUrl: verifyUrl,
      year: new Date().getFullYear(),
    };

    await this.mailService.send({
      path: "email-verification",
      to: user.email,
      subject: subject,
      variables,
    });
  }


  async createUserWithoutPassword(
    data: CreateUserWithoutPassword
  ): Promise<BaseResult> {
    const password = generate({
      numbers: true,
      excludeSimilarCharacters: true,
    });

    const variables = {
      title: "Defined - Your Account Password",
      password,
      year: new Date().getFullYear(),
    };

    try {
      // Busca o app DISCARD_ME para vincular automaticamente
      const discardMeApp = await (this.prismaService as any).app.findUnique({
        where: { code: 'DISCARD_ME' },
      });

      const { id } = await this.prismaService.user.create({
        data: {
          ...data,
          password: hashSync(password, 10),
          apps: discardMeApp
            ? {
                create: {
                  appId: discardMeApp.id,
                },
              }
            : undefined,
        } as any,
      });

      if (id) {
        await this.mailService.send({
          path: "send_password",
          to: data.email,
          subject: "Defined - Your Account Password",
          variables,
        });
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return {
          message: "Já existe uma conta com esse email.",
          success: false,
        };
      }

      return {
        message: "Não foi possível criar usuário, tente novamente",
        success: false,
      };
    }

    return {
      message: "Foi enviado e-mail para o usuário com a senha",
      success: true,
    };
  }

  async updateUser(
    currentUser: User,
    updateOneUserArgs: UpdateUserInput
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        firstName: updateOneUserArgs.firstName ?? undefined,
        lastName: updateOneUserArgs.lastName ?? undefined,
        nickname: updateOneUserArgs.nickname ?? undefined,
        email: updateOneUserArgs.email ?? undefined,
        apartment: updateOneUserArgs.apartment ?? undefined,
        profilePicture: updateOneUserArgs.profilePicture ?? undefined,
        public: updateOneUserArgs.public ?? undefined,
        about: updateOneUserArgs.about ?? undefined,
      },
    });
  }

  async getPendingResidents(): Promise<User[]> {
    return this.prismaService.user.findMany({
      where: {
        isApprovedResident: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async approveResident(userId: number): Promise<BaseResult> {
    const user = await this.prismaService.user.update({
      where: { id: userId },
      data: { isApprovedResident: true },
    });

    // Enviar email de aprovação
    await this.mailService.send({
      path: 'resident_approved',
      to: user.email,
      subject: 'Discart-me - Your Resident Application Has Been Approved',
      variables: {
        firstName: user.firstName,
        lastName: user.lastName,
        loginUrl: 'https://www.discart.me',
        year: new Date().getFullYear(),
      },
    });

    return {
      success: true,
      message: `Resident ${user.firstName} ${user.lastName} has been approved`,
    };
  }

  async rejectResident(userId: number, reason?: string): Promise<BaseResult> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    // Enviar email de rejeição
    await this.mailService.send({
      path: 'resident_rejected',
      to: user.email,
      subject: 'Discart-me - Your Resident Application Status',
      variables: {
        firstName: user.firstName,
        lastName: user.lastName,
        reason: reason || 'Your application did not meet our requirements.',
        contactUrl: 'https://www.discart.me/contact',
        year: new Date().getFullYear(),
      },
    });

    // Opcional: deletar o usuário ou apenas deixar como não aprovado
    // Por enquanto, vamos apenas deixar como não aprovado
    return {
      success: true,
      message: `Resident ${user.firstName} ${user.lastName} has been rejected`,
    };
  }

}