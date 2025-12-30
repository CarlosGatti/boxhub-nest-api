import { forwardRef, Inject, Injectable, UnauthorizedException, ConflictException, BadRequestException } from "@nestjs/common";
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
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { RefreshDto } from "./dto/refresh.dto";
import { AuthResponseDto } from "./dto/auth-response.dto";
import { randomBytes, createHash } from "crypto";
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
      
      // Transformar user para LoginUser com apps como array de strings
      const loginUser = {
        id: userToAttempt.id,
        email: userToAttempt.email,
        firstName: userToAttempt.firstName,
        lastName: userToAttempt.lastName,
        nickname: userToAttempt.nickname,
        profilePicture: userToAttempt.profilePicture,
        apartment: userToAttempt.apartment,
        isApprovedResident: userToAttempt.isApprovedResident,
        isAdmin: userToAttempt.isAdmin,
        apps: (userToAttempt as any).apps || [],
      };
      
      const result: LoginResult = {
        user: loginUser as any,
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
      // Garante que o objeto user tenha o array de apps
      const userWithApps = {
        ...user,
        apps: (user as any).apps || [],
      };
      return userWithApps as any;
    }

    return undefined;
  }

  // TODO  Remover hard-code do JWT (Add .env)
  createJwt(user: User | any): { data: JwtPayload; token: string } {
    const expiresIn = 1000000;
    let expiration: Date | undefined;
    if (expiresIn) {
      expiration = new Date();
      expiration.setTime(expiration.getTime() + expiresIn * 1000);
    }
    
    // Extrair apps do user (pode vir como array de strings ou como UserAppAccess[])
    const apps = Array.isArray(user.apps) 
      ? user.apps.map((app: any) => typeof app === 'string' ? app : app.app?.code || app.code)
      : [];
    
    const data: JwtPayload = {
      email: user.email,
      _id: String(user.id),
      expiration,
      apps: apps.length > 0 ? apps : undefined,
    };

    const jwt = this.jwtService.sign(data);

    return {
      data,
      token: jwt,
    };
  }

  // Wealth Tracker Auth Methods (REST) - Uses existing user creation pattern
  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const { email, password, firstName, lastName } = registerDto;

    // Check if user already exists
    const existingUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Use existing user creation pattern (same as UserService.createUser)
    // This ensures consistency with existing projects
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 14);

    // Find Wealth Tracker app to link user
    const wealthTrackerApp = await this.prismaService.app.findUnique({
      where: { code: 'WEALTH_TRACKER' },
    });

    // Create user using same pattern as existing projects
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashSync(password, 10),
        firstName,
        lastName,
        emailVerified: false,
        expiresAt,
        willExpireAt: expiresAt,
        isPremium: false,
        apps: wealthTrackerApp
          ? {
              create: {
                appId: wealthTrackerApp.id,
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

    // Transform user to include apps array (same pattern as existing code)
    const userWithApps = {
      ...user,
      apps: (user as any).apps?.map((ua: any) => ua.app.code) || [],
    };

    // Generate tokens (will include apps in JWT)
    const tokens = await this.generateTokens(userWithApps as any);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async loginRest(loginDto: LoginDto, ipAddress?: string): Promise<AuthResponseDto> {
    // Use existing login validation pattern (same as validateUserByPassword)
    const { email, password } = loginDto;

    // Use existing user lookup pattern (includes apps)
    const user = await this.usersService.user({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate tokens (will include apps in JWT)
    const tokens = await this.generateTokens(user);

    // Log login (same as existing pattern)
    try {
      await createLog({
        action: LogAction.USER_LOGIN,
        userId: user.id,
        details: `User ${user.email} logged in successfully`,
        route: '/auth/login',
        metadata: {
          ipAddress,
        },
      });
    } catch (logError) {
      console.error('⚠️ Failed to create login log:', logError);
    }

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async refresh(refreshDto: RefreshDto): Promise<{ accessToken: string }> {
    const { refreshToken } = refreshDto;

    // Hash the provided token to compare with stored hash
    const hashedToken = createHash('sha256').update(refreshToken).digest('hex');

    // Find refresh token in database
    const storedToken = await this.prismaService.refreshToken.findFirst({
      where: {
        token: hashedToken,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    // Generate new access token
    const accessToken = this.generateAccessToken(storedToken.user);

    return { accessToken };
  }

  async logout(refreshToken: string): Promise<void> {
    const hashedToken = createHash('sha256').update(refreshToken).digest('hex');
    await this.prismaService.refreshToken.deleteMany({
      where: { token: hashedToken },
    });
  }

  private async generateTokens(user: User | any): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = this.generateAccessToken(user);
    const refreshToken = await this.generateRefreshToken(user);

    return { accessToken, refreshToken };
  }

  private generateAccessToken(user: User | any): string {
    const accessSecret = process.env.JWT_ACCESS_SECRET || '97742c5c0c5ea59ab16e61af76825b8b';
    const accessExpiresIn = process.env.JWT_ACCESS_EXPIRES_IN || '15m';

    // Extract apps array (same pattern as existing createJwt method)
    const apps = Array.isArray(user.apps)
      ? user.apps.map((app: any) => typeof app === 'string' ? app : app.app?.code || app.code)
      : [];

    const payload: JwtPayload = {
      email: user.email,
      _id: String(user.id),
      apps: apps.length > 0 ? apps : undefined,
    };

    return this.jwtService.sign(payload, {
      secret: accessSecret,
      expiresIn: accessExpiresIn,
    });
  }

  private async generateRefreshToken(user: User | any): Promise<string> {
    const refreshExpiresIn = process.env.JWT_REFRESH_EXPIRES_IN || '30d';

    // Generate random token
    const token = randomBytes(32).toString('hex');
    const hashedToken = createHash('sha256').update(token).digest('hex');

    // Calculate expiration date
    const expiresInDays = parseInt(refreshExpiresIn.replace('d', '')) || 30;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiresInDays);

    // Store hashed token in database
    await this.prismaService.refreshToken.create({
      data: {
        userId: user.id,
        token: hashedToken,
        expiresAt,
      },
    });

    // Return plain token (client will send this back, we'll hash and lookup)
    return token;
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
