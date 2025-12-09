import { Args, Mutation, Query, Resolver, ResolveField } from "@nestjs/graphql";

import { CurrentUser } from "./current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { MeDto } from "./dto/me.dto";
import { UseGuards, BadRequestException } from "@nestjs/common";
import { User } from "../../@generated/user/user.model";
import { UserService } from "./user.service";
import { UserUpdateInput } from "../../@generated/user/user-update.input";
import { PaginationArgs } from "../shared/types/pagination.input";
import { UserCreateInput } from "../../@generated/user/user-create.input";
import { CreateUserWithoutPassword } from "./dto/createUser.dto";
import { BaseResult } from "../models/base-error.dto";
import { ProGuard } from "src/auth/guards/pro.guard";
import { AdminGuard } from "src/auth/guards/admin.guard";
import { MailService } from "src/services/providers/mail/mail.service";
import { RegisterUserInput, LoginResult } from "./dto/user.dto";
import { AuthService } from "../auth/auth.service";

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
  @UseGuards(JwtAuthGuard, ProGuard)
  updateUser(
    @CurrentUser() currentUser: User,
    @Args("data") data: UserUpdateInput
  ) {
    return this.userService.updateUser(currentUser, data);
  }

  @Mutation(() => BaseResult, { name: "createUserWithoutPassword" })
  createUserWithoutPassword(@Args("data") data: CreateUserWithoutPassword) {
    return this.userService.createUserWithoutPassword(data);
  }

  @Mutation(() => LoginResult, { name: "register" })
  async register(
    @Args("user") userInput: RegisterUserInput,
    @Args("appCode", { nullable: true, type: () => String }) appCode?: string
  ): Promise<LoginResult> {
    console.log("📝 Registering user with email:", userInput.email);
    console.log("📝 AppCode received from frontend:", appCode ? `"${appCode}"` : "NOT PROVIDED (will default to DISCARD_ME)");
    
    // Determinar qual app está sendo usado (padrão: DISCARD_ME)
    const targetAppCode = appCode || 'DISCARD_ME';
    
    console.log("📝 Final targetAppCode:", targetAppCode);
    
    try {
      // Verificar se o usuário já existe (PRIMEIRA VERIFICAÇÃO - antes de qualquer criação)
      console.log("🔍 Checking if user exists with email:", userInput.email);
      const existingUser = await this.userService.user({
        where: { email: userInput.email },
      });

      console.log("🔍 User check result:", existingUser ? "EXISTS" : "NOT EXISTS");

      if (existingUser) {
        // Usuário já existe - verificar senha e adicionar acesso ao app se necessário
        console.log("👤 User already exists, verifying password and checking app access");
        console.log("🔍 Target app code:", targetAppCode);
        
        // Buscar todos os apps que o usuário já tem acesso
        const userWithApps = await this.userService.user({
          where: { id: existingUser.id },
        });
        
        const existingUserApps = (userWithApps as any).apps || [];
        console.log("📋 User currently has access to apps:", existingUserApps);
        
        // Verificar senha
        const { compareSync } = await import('bcryptjs');
        const isPasswordCorrect = compareSync(userInput.password, existingUser.password);
        console.log("🔐 Password verification result:", isPasswordCorrect ? "CORRECT" : "INCORRECT");
        
        if (!isPasswordCorrect) {
          console.log("❌ Password incorrect - informing user about existing apps");
          const appsList = existingUserApps.length > 0 
            ? existingUserApps.join(', ')
            : 'nenhum app';
          throw new BadRequestException(
            `Este email já está registrado no sistema com acesso aos seguintes projetos: ${appsList}. Por favor, faça login com sua senha para acessar.`
          );
        }
        
        console.log("✅ Password correct - proceeding to check/add app access");

        // Buscar o app alvo
        console.log("🔍 Looking for app with code:", targetAppCode);
        const targetApp = await (this.userService as any).prismaService.app.findUnique({
          where: { code: targetAppCode },
        });
        
        console.log("🔍 App found:", targetApp ? `YES (id: ${targetApp.id})` : "NO - App not found!");

        if (!targetApp) {
          console.error(`❌ ERROR: App with code '${targetAppCode}' not found in database!`);
          throw new BadRequestException(
            `App '${targetAppCode}' not found. Available apps: DISCARD_ME, QRACK, BOXHUB, RH`
          );
        }

        // Verificar se já tem acesso ao app
        const hasAccess = await (this.userService as any).prismaService.userAppAccess.findUnique({
          where: {
            userId_appId: {
              userId: existingUser.id,
              appId: targetApp.id,
            },
          },
        });

        console.log(`🔍 User access check for ${targetAppCode}:`, hasAccess ? "ALREADY HAS ACCESS" : "NEEDS ACCESS");

        if (hasAccess) {
          // Usuário já tem acesso ao app solicitado - apenas retornar sucesso com login
          console.log(`ℹ️  User already has access to ${targetAppCode} - returning login token`);
          // Não lançar erro, apenas fazer login normalmente
        } else {
          // Se não tiver acesso, adicionar
          console.log(`📝 Creating UserAppAccess for user ${existingUser.id} and app ${targetApp.id} (${targetAppCode})`);
          const newAccess = await (this.userService as any).prismaService.userAppAccess.create({
            data: {
              userId: existingUser.id,
              appId: targetApp.id,
            },
          });
          console.log(`✅ Added access to ${targetAppCode} for existing user. Access ID: ${newAccess.id}`);
        }

        // Buscar user completo com apps atualizados (após adicionar acesso)
        console.log("🔍 Fetching user with updated apps, ID:", existingUser.id);
        const userWithAppsUpdated = await this.userService.user({
          where: { id: existingUser.id },
        });
        
        if (!userWithAppsUpdated) {
          console.error("❌ ERROR: User not found after adding app access! ID:", existingUser.id);
          throw new Error("User was updated but could not be retrieved");
        }
        
        const userApps = (userWithAppsUpdated as any).apps || [];
        console.log("✅ User retrieved with updated apps:", userApps);

        // Gerar token de login
        const loginToken = this.authService.createJwt(userWithAppsUpdated as any).token;

        // Transformar user para LoginUser com apps como array de strings
        const loginUser = {
          id: userWithAppsUpdated!.id,
          email: userWithAppsUpdated!.email,
          firstName: userWithAppsUpdated!.firstName,
          lastName: userWithAppsUpdated!.lastName,
          nickname: userWithAppsUpdated!.nickname,
          profilePicture: userWithAppsUpdated!.profilePicture,
          apartment: userWithAppsUpdated!.apartment,
          isApprovedResident: userWithAppsUpdated!.isApprovedResident,
          isAdmin: userWithAppsUpdated!.isAdmin,
          apps: userApps,
        };
        
        console.log("✅ Registration/access update complete. Returning LoginResult with user ID:", loginUser.id, "and apps:", loginUser.apps);

        return {
          user: loginUser as any,
          token: loginToken,
        };
      }

      // Usuário não existe - criar novo usuário
      console.log("🆕 User does not exist - creating new user for app:", targetAppCode);
      
      // Buscar o app alvo ANTES de criar o usuário
      console.log("🔍 Looking for target app:", targetAppCode);
      const targetApp = await (this.userService as any).prismaService.app.findUnique({
        where: { code: targetAppCode },
      });
      
      if (!targetApp) {
        console.error(`❌ ERROR: App '${targetAppCode}' not found in database!`);
        throw new BadRequestException(
          `App '${targetAppCode}' not found. Available apps: DISCARD_ME, QRACK, BOXHUB, RH`
        );
      }
      
      console.log("🔍 Target app found:", targetApp ? `YES (id: ${targetApp.id})` : "NO");
      
      // Buscar também o DISCARD_ME para adicionar ambos se necessário
      const discardMeApp = await (this.userService as any).prismaService.app.findUnique({
        where: { code: 'DISCARD_ME' },
      });
      
      const userCreateData: UserCreateInput = {
        email: userInput.email,
        password: userInput.password,
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        public: userInput.public ?? false,
        apartment: userInput.apartment,
      };

      // Create the user (emailVerified will be false by default)
      // Se der erro de email duplicado aqui, significa que houve race condition
      // ou o código não está sendo executado corretamente
      try {
        console.log("📝 Calling createUser service...");
        const user = await this.userService.createUser(userCreateData);
        console.log("✅ User created successfully in database, ID:", user.id);

        // Adicionar acesso ao app alvo (QRACK, BOXHUB, etc.)
        console.log(`📝 Creating UserAppAccess for user ${user.id} and app ${targetApp.id} (${targetAppCode})`);
        await (this.userService as any).prismaService.userAppAccess.create({
          data: {
            userId: user.id,
            appId: targetApp.id,
          },
        });
        console.log(`✅ Added access to ${targetAppCode} for new user`);
        
        // Se o app alvo não for DISCARD_ME, também adicionar acesso ao DISCARD_ME
        // (para que o usuário tenha acesso a ambos)
        if (targetAppCode !== 'DISCARD_ME' && discardMeApp) {
          console.log(`📝 Also adding access to DISCARD_ME for new user`);
          await (this.userService as any).prismaService.userAppAccess.create({
            data: {
              userId: user.id,
              appId: discardMeApp.id,
            },
          });
          console.log(`✅ Added access to DISCARD_ME for new user`);
        }

        // Buscar user completo com apps atualizados
        console.log("🔍 Fetching user with apps, ID:", user.id);
        const userWithApps = await this.userService.user({
          where: { id: user.id },
        });
        
        if (!userWithApps) {
          console.error("❌ ERROR: User not found after creation! ID:", user.id);
          throw new Error("User was created but could not be retrieved");
        }
        
        console.log("✅ User retrieved with apps:", (userWithApps as any).apps || []);

        // Generate JWT token for email verification
        const verificationToken = this.authService.createJwt(userWithApps as any).token;

        // Send email verification email
        try {
          await this.userService.sendEmailVerification(userWithApps as any, verificationToken);
          console.log("📧 Email verification sent to:", userWithApps!.email);
        } catch (emailError) {
          console.error("⚠️  Error sending verification email (non-critical):", emailError);
          // Não falhar o registro se o email falhar
        }

        // Generate JWT token for login (user can login but email is not verified yet)
        const loginToken = this.authService.createJwt(userWithApps as any).token;

        // Transformar user para LoginUser com apps como array de strings
        const loginUser = {
          id: userWithApps!.id,
          email: userWithApps!.email,
          firstName: userWithApps!.firstName,
          lastName: userWithApps!.lastName,
          nickname: userWithApps!.nickname,
          profilePicture: userWithApps!.profilePicture,
          apartment: userWithApps!.apartment,
          isApprovedResident: userWithApps!.isApprovedResident,
          isAdmin: userWithApps!.isAdmin,
          apps: (userWithApps as any).apps || [],
        };
        
        console.log("✅ Registration complete. Returning LoginResult with user ID:", loginUser.id, "and apps:", loginUser.apps);

        // Return LoginResult with user and token
        return {
          user: loginUser as any,
          token: loginToken,
        };
      } catch (createError: any) {
        // Se der erro ao criar, pode ser que o usuário foi criado entre a verificação e a criação
        // (race condition) ou erro de constraint única do Prisma
        console.error("❌ Error creating user:", createError);
        
        if (createError.code === 'P2002' && createError.meta?.target?.includes('email')) {
          // Email já existe - tentar buscar o usuário novamente e adicionar acesso ao app
          console.log("⚠️  Email constraint error - user may have been created. Trying to add app access...");
          const userAfterError = await this.userService.user({
            where: { email: userInput.email },
          });
          
          if (userAfterError) {
            // Usuário existe agora - verificar senha e adicionar acesso ao app
            const { compareSync } = await import('bcryptjs');
            const isPasswordCorrect = compareSync(userInput.password, userAfterError.password);
            
            if (!isPasswordCorrect) {
              throw new BadRequestException(
                'An account with this email already exists. Please login with your password instead.'
              );
            }

            // Adicionar acesso ao app
            const targetApp = await (this.userService as any).prismaService.app.findUnique({
              where: { code: targetAppCode },
            });

            if (targetApp) {
              const hasAccess = await (this.userService as any).prismaService.userAppAccess.findUnique({
                where: {
                  userId_appId: {
                    userId: userAfterError.id,
                    appId: targetApp.id,
                  },
                },
              });

              if (!hasAccess) {
                await (this.userService as any).prismaService.userAppAccess.create({
                  data: {
                    userId: userAfterError.id,
                    appId: targetApp.id,
                  },
                });
                console.log(`✅ Added access to ${targetAppCode} for existing user (after race condition)`);
              }
            }

            const userWithApps = await this.userService.user({
              where: { id: userAfterError.id },
            });

            const loginToken = this.authService.createJwt(userWithApps as any).token;

            const loginUser = {
              id: userWithApps!.id,
              email: userWithApps!.email,
              firstName: userWithApps!.firstName,
              lastName: userWithApps!.lastName,
              nickname: userWithApps!.nickname,
              profilePicture: userWithApps!.profilePicture,
              apartment: userWithApps!.apartment,
              isApprovedResident: userWithApps!.isApprovedResident,
              isAdmin: userWithApps!.isAdmin,
              apps: (userWithApps as any).apps || [],
            };

            return {
              user: loginUser as any,
              token: loginToken,
            };
          }
        }
        
        throw createError;
      }
    } catch (error: any) {
      console.error("❌ Error registering user:", error);
      // Re-throw com mensagem mais amigável se for erro de email duplicado
      if (error.message?.includes('already exists') || error instanceof BadRequestException) {
        throw error;
      }
      throw error;
    }
  }

  @Mutation(() => BaseResult, { name: "verifyEmail" })
  async verifyEmail(@Args("token") token: string): Promise<BaseResult> {
    return this.authService.verifyEmail(token);
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
