import { Args, Mutation, Query, Resolver, ResolveField, Context } from "@nestjs/graphql";

import { CurrentUser } from "./current-user.decorator";
import { JwtAuthGuard } from "src/core/auth/guards/jwt-auth.guard";
import { MeDto } from "./dto/me.dto";
import { UseGuards, BadRequestException, UsePipes, ValidationPipe } from "@nestjs/common";
import { User } from "@generated/user/user.model";
import { UserService } from "./user.service";
import { UpdateUserInput } from "./dto/update-user.input";
import { PaginationArgs } from "src/shared/types/pagination.input";
import { UserCreateInput } from "@generated/user/user-create.input";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { BaseResult } from "src/shared/dto/base-error.dto";
import { ProGuard } from "src/core/auth/guards/pro.guard";
import { AdminGuard } from "src/core/auth/guards/admin.guard";
import { MailService } from "src/core/services/providers/mail/mail.service";
import { RegisterUserInput, LoginResult, RegisterResponse } from "./dto/user.dto";
import { AuthService } from "src/core/auth/auth.service";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
    private readonly authService: AuthService
  ) {}

  // Sobrescrever o campo apps para retornar array de strings ao invés de UserAppAccess[]
  // IMPORTANTE: Este ResolveField deve vir ANTES de outras queries que retornam User
  @ResolveField('apps', () => [String], { nullable: true })
  async apps(user: User): Promise<string[]> {
    // Buscar o user completo com apps para transformar em array de códigos
    const fullUser = await this.userService.user({
      where: { id: user.id },
    });
    
    if (!fullUser) {
      return [];
    }
    
    // Retornar array de códigos de apps
    return (fullUser as any).apps || [];
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  users() {
    return this.userService.users();
  }

  @Query(() => MeDto, { name: "me" })
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() currentUser: User) {
    return this.userService.me(currentUser);
  }

  @Query(() => Boolean, { name: "emailAvailable" })
  async isEmailAvailable(@Args("email") email: string): Promise<boolean> {
    const user = await this.userService.user({
      where: { email },
    });

    return !user; 
  }

  @Mutation(() => User, { name: "createUser" })
  async createUser(@Args("data") data: UserCreateInput) {
    console.log("📝 Creating user with email:", data.email);
    try {
      const user = await this.userService.createUser(data);
      console.log("✅ User created successfully:", user.id);
      return user;
    } catch (error) {
      console.error("❌ Error creating user:", error);
      throw error;
    }
  }

  @Mutation(() => User, { name: "updateUser" })
  @UseGuards(JwtAuthGuard)
  updateUser(
    @CurrentUser() currentUser: User,
    @Args("data") data: UpdateUserInput
  ) {
    return this.userService.updateUser(currentUser, data);
  }

  @Mutation(() => BaseResult, { name: "createUserWithoutPassword" })
  createUserWithoutPassword(@Args("data") data: CreateUserWithoutPassword) {
    return this.userService.createUserWithoutPassword(data);
  }

  @Mutation(() => RegisterResponse, { name: "register" })
  async register(
    @Args("user") userInput: RegisterUserInput,
    @Args("appCode", { nullable: true, type: () => String }) appCode?: string,
    @Context('req') request?: any
  ): Promise<RegisterResponse> {
    const email = userInput.email.toLowerCase().trim();
    const headerAppCode =
      request?.headers?.['x-app-code'] ||
      request?.headers?.['x-app'] ||
      request?.headers?.['x-app-name'];
    const rawAppCode = appCode || userInput.appCode || headerAppCode;
    const normalizedAppCode = rawAppCode ? String(rawAppCode).trim().toUpperCase() : undefined;
    console.log("📝 Registering user with email:", email);
    console.log("📝 AppCode received:", normalizedAppCode || "NOT PROVIDED");
    

    console.log("[REGISTER] arg appCode:", appCode);
   console.log("[REGISTER] userInput.appCode:", userInput.appCode);
   console.log("[REGISTER] header x-app-code:", request?.headers?.['x-app-code']);
   console.log("[REGISTER] header x-app:", request?.headers?.['x-app']);
   console.log("[REGISTER] header x-app-name:", request?.headers?.['x-app-name']);

   
    try {
      // 0. If appCode was provided, validate it before creating user
      const selectedApp = normalizedAppCode
        ? await (this.userService as any).prismaService.app.findUnique({
            where: { code: normalizedAppCode },
          })
        : null;

      if (normalizedAppCode && !selectedApp) {
        throw new BadRequestException(`App not found: ${normalizedAppCode}`);
      }

      // 1. Buscar usuário existente
      let user = await (this.userService as any).prismaService.user.findUnique({
        where: { email },
      });

      console.log("🔍 User exists?", user ? `YES (id: ${user.id})` : "NO");

      // 2. Se não existir, criar usuário
      if (!user) {
        const { hashSync } = await import('bcryptjs');
        const hashedPassword = hashSync(userInput.password, 10);
        
        // Buscar DISCARD_ME para vincular automaticamente ao criar usuário
        const discardMeApp = await (this.userService as any).prismaService.app.findUnique({
          where: { code: 'DISCARD_ME' },
        });
        
        const createApps: { appId: number }[] = [];
        if (discardMeApp) {
          createApps.push({ appId: discardMeApp.id });
        }
        if (selectedApp && selectedApp.code !== 'DISCARD_ME') {
          createApps.push({ appId: selectedApp.id });
        }

        user = await (this.userService as any).prismaService.user.create({
          data: {
            email,
            password: hashedPassword,
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            public: userInput.public ?? false,
            apartment: userInput.apartment,
            emailVerified: false,
            apps: createApps.length > 0 ? { create: createApps } : undefined,
          },
        });
        console.log("✅ User created, ID:", user.id);
      }

      // 3. Se appCode foi enviado, associar o user ao app usando upsert
      if (selectedApp) {
        const association = await (this.userService as any).prismaService.userAppAccess.upsert({
          where: {
            userId_appId: {
              userId: user.id,
              appId: selectedApp.id,
            },
          },
          update: {},
          create: {
            userId: user.id,
            appId: selectedApp.id,
          },
        });
        console.log(`✅ Associated user with app: ${normalizedAppCode}`, {
          associationId: association.id,
          userId: user.id,
          appId: selectedApp.id,
        });
      }

      // 4. Recarregar com apps
      const completeUser = await (this.userService as any).prismaService.user.findUnique({
        where: { id: user.id },
        include: {
          apps: { include: { app: true } },
        },
      });

      if (!completeUser) {
        throw new Error("User not found after registration");
      }

      const appCodes = (completeUser.apps || []).map((ua: any) => ua.app.code);
      console.log("✅ User apps:", appCodes);

      // 5. Gerar token (incluindo apps no payload)
      const loginToken = this.authService.createJwt(completeUser as any).token;

      // 6. Enviar email de verificação (se não verificado)
      if (!completeUser.emailVerified) {
        try {
          const token = await this.authService.generateAndStoreVerificationToken(completeUser.id);
          const apiUrl = process.env.API_URL || process.env.PUBLIC_API_URL || `http://localhost:${process.env.PORT || 3000}`;
          const verifyLink = `${apiUrl.replace(/\/$/, '')}/auth/verify-email?token=${token}`;
          await this.userService.sendEmailVerificationWithLink(completeUser as any, verifyLink, normalizedAppCode);
          console.log("📧 Email verification sent");
        } catch (emailError) {
          console.error("⚠️  Error sending verification email (non-critical):", emailError);
        }
      }

      // 7. Se email NÃO verificado: não emitir token, retornar mensagem para verificar
      if (!completeUser.emailVerified) {
        return {
          success: true,
          message: "Account created. Please check your email and click the verification link to activate your account.",
          email: completeUser.email,
          requiresVerification: true,
        };
      }

      // 8. Se já verificado: retornar token (usuário existente que já verificou)
      const loginUser = {
        id: completeUser.id,
        email: completeUser.email,
        firstName: completeUser.firstName,
        lastName: completeUser.lastName,
        nickname: completeUser.nickname,
        profilePicture: completeUser.profilePicture,
        apartment: completeUser.apartment,
        isApprovedResident: completeUser.isApprovedResident,
        isAdmin: completeUser.isAdmin,
        apps: appCodes,
      };

      return {
        success: true,
        requiresVerification: false,
        user: loginUser as any,
        token: loginToken,
      };
    } catch (error: any) {
      console.error("❌ Error registering user:", error);
      
      // Se for erro de email duplicado (race condition), tentar novamente
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        console.log("⚠️  Race condition detected, retrying...");
        // Recursivamente tentar novamente (mas apenas uma vez)
        return this.register(userInput, appCode);
      }
      
      throw error;
    }
  }

  @Mutation(() => BaseResult, { name: "verifyEmail" })
  async verifyEmail(@Args("token") token: string): Promise<BaseResult> {
    return this.authService.verifyEmail(token);
  }

  @Mutation(() => BaseResult, { name: "resendVerificationEmail" })
  async resendVerificationEmail(
    @Args("email") email: string,
    @Context('req') request?: any
  ): Promise<BaseResult> {
    return this.authService.resendVerificationEmail(
      email?.toLowerCase?.()?.trim() || email,
      request?.ip || request?.headers?.['x-forwarded-for'] || request?.connection?.remoteAddress || 'unknown'
    );
  }


    
@Mutation(() => BaseResult)
async sendEmail(
  @Args('to') to: string,
  @Args('subject') subject: string,
  @Args('message') message: string,
  @Args('name') name: string,
  @Args('email') email: string,
): Promise<BaseResult> {  
  try {
    await this.mailService.send({
      to,
      subject,
      variables: {
        name,
        email,
        message,
        year: new Date().getFullYear(),
      },
      path: 'contact_us',
    });
    return { success: true, message: 'Email enviado com sucesso.' };
  } catch (error) {
    return { success: false, message: 'Erro ao enviar email.' };
  }
}

  @Query(() => [User], { name: "pendingResidents" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  getPendingResidents() {
    return this.userService.getPendingResidents();
  }

  @Mutation(() => BaseResult, { name: "approveResident" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  approveResident(
    @Args('userId', { type: () => Number }) userId: number
  ) {
    return this.userService.approveResident(userId);
  }

  @Mutation(() => BaseResult, { name: "rejectResident" })
  @UseGuards(JwtAuthGuard, AdminGuard)
  rejectResident(
    @Args('userId', { type: () => Number }) userId: number,
    @Args('reason', { nullable: true, type: () => String }) reason?: string
  ) {
    return this.userService.rejectResident(userId, reason);
}

}