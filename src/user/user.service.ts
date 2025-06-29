import { Prisma, User } from "@prisma/client";

import { BaseResult } from "../models/base-error.dto";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { Injectable } from "@nestjs/common";
import { MailService } from "src/services/providers/mail/mail.service";
import { MeDto } from "./dto/me.dto";
import { PaginationArgs } from "../shared/types/pagination.input";
import { PrismaService } from "../prisma.service";
import { UserCreateInput } from "../../@generated/user/user-create.input";
import { UserUpdateInput } from "../../@generated/user/user-update.input";
import { generate } from "generate-password";
import { hashSync } from "bcrypt";

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
    return this.prismaService.user.findFirst(args);
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
      },
    });

    if (!data) {
      throw new Error("User not found");
    }

    return {
      ...data
    } as MeDto;
  }

  async createUser(data: UserCreateInput): Promise<User> {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 14);

    const user = await this.prismaService.user.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        nickname: data.nickname,
        password: hashSync(data.password, 10),
        profilePicture: data.profilePicture,
        public: data.public,
        expiresAt,
        willExpireAt: expiresAt,
        isPremium: false, // Default to false, can be updated later
      },
    });

    const variables = {
      firstName: user.firstName,
      lastName: user.lastName,
      loginUrl: process.env.FRONTEND_URL_PROD + "/account/login",
      year: new Date().getFullYear(),
    };

    this.mailService.send({
      path: "welcome",
      to: data.email,
      subject: "Welcome to BoxHub",
      variables,
    });

    return user;
  }

  async createUserWithoutPassword(
    data: CreateUserWithoutPassword
  ): Promise<BaseResult> {
    const password = generate({
      numbers: true,
      excludeSimilarCharacters: true,
    });

    const variables = {
      title: "We Social - Sua senha",
      password,
    };

    try {
      const { id } = await this.prismaService.user.create({
        data: {
          ...data,
          password: hashSync(password, 10),
        },
      });

      if (id) {
        await this.mailService.send({
          path: "send_password",
          to: data.email,
          subject: "We Social - Sua senha",
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
    updateOneUserArgs: UserUpdateInput
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        firstName: updateOneUserArgs.firstName,
        lastName: updateOneUserArgs.lastName,
        nickname: updateOneUserArgs.nickname,
        email: updateOneUserArgs.email,
        profilePicture: updateOneUserArgs.profilePicture,
        public: updateOneUserArgs.public,
        about: updateOneUserArgs.about,
      },
    });
  }


}
