import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ForbiddenException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createHash, randomBytes } from "crypto";
import { EMAIL_NOT_VERIFIED_CODE } from "./guards/email-verified.guard";
import { User } from "@generated/user/user.model";
import { LoginResult, LoginUserInput } from "../../domains/user/dto/user.dto";
import { UserService } from "../../domains/user/user.service";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { compareSync } from "bcryptjs";
import { isEmail, isEmpty, minLength } from "class-validator";
import { BaseResult } from "src/shared/dto/base-error.dto";
import { MailService } from "src/core/services/providers/mail/mail.service";
import { hashSync } from "bcryptjs";
import { PrismaService } from "src/core/prisma/prisma.service";
import { LogAction } from "@prisma/client";
import { createLog } from "../services/create-log";

const RESEND_IP_WINDOW_MS = 60 * 1000;
const RESEND_IP_MAX = 5;
const RESEND_EMAIL_WINDOW_MS = 60 * 60 * 1000;
const RESEND_EMAIL_MAX = 3;
const VERIFICATION_TOKEN_EXPIRY_HOURS = 24;

function createRateLimiter(windowMs: number, max: number) {
  const store = new Map<string, { count: number; resetAt: number }>();
  return (key: string): boolean => {
    const now = Date.now();
    const cur = store.get(key);
    if (!cur || cur.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return true;
    }
    if (cur.count >= max) return false;
    cur.count += 1;
    return true;
  };
}

const ipRateLimiter = createRateLimiter(RESEND_IP_WINDOW_MS, RESEND_IP_MAX);
const emailRateLimiter = createRateLimiter(RESEND_EMAIL_WINDOW_MS, RESEND_EMAIL_MAX);

function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}
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
      if (userToAttempt.emailVerified !== true) {
        throw new ForbiddenException({
          code: EMAIL_NOT_VERIFIED_CODE,
          message:
            'Your email has not been verified. Please check your inbox and click the verification link to activate your account.',
        });
      }

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

  /** Generates secure random token, stores hash+expiry in DB, returns plain token for email link. */
  async generateAndStoreVerificationToken(userId: number): Promise<string> {
    const token = randomBytes(32).toString('hex');
    const tokenHash = hashToken(token);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + VERIFICATION_TOKEN_EXPIRY_HOURS);

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        verificationTokenHash: tokenHash,
        verificationTokenExpiresAt: expiresAt,
      },
    });

    return token;
  }

  /** @deprecated Use generateAndStoreVerificationToken for new flows. Kept for GraphQL verifyEmail mutation. */
  createEmailVerificationToken(user: User | any): string {
    const payload = {
      _id: String(user.id),
      email: user.email,
      purpose: 'email_verification',
    };
    return this.jwtService.sign(payload, {
      expiresIn: '24h',
      secret: process.env.JWT_ACCESS_SECRET || '97742c5c0c5ea59ab16e61af76825b8b',
    });
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

  async requestPasswordReset(email: string): Promise<BaseResult> {
    const normalizedEmail = email?.toLowerCase?.()?.trim() || '';
    const user = normalizedEmail
      ? await this.usersService.user({ where: { email: normalizedEmail } })
      : null;

    if (!user) {
      return {
        success: true,
        message: "If an account exists for this email, you will receive a link to reset your password.",
      };
    }

    const token = this.createJwt(user).token;
    const frontendUrl = process.env.FRONTEND_URL || process.env.FRONTEND_URL_PROD || 'https://carlosgatti.com';
    const logoUrl = process.env.EMAIL_LOGO_URL || 'https://www.discart.me/static/email/img/logo-boxhub.png';
    const resetUrl = `${frontendUrl.replace(/\/$/, '')}/reset-password?token=${token}`;

    const variables = {
      title: "Defined - Reset Your Password",
      token,
      resetUrl,
      logoUrl,
      year: new Date().getFullYear(),
    };

    try {
      await this.mailService.send({
        path: "forgot_password",
        to: user.email,
        subject: "Defined - Reset Your Password",
        variables,
      });
    } catch (sendErr) {
      console.error("Error sending password reset email:", sendErr);
    }

    return {
      success: true,
      message:
        "If an account exists for this email, you will receive a link to reset your password.",
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

    // If account is still unverified, send a fresh verification email
    if (!user.emailVerified) {
      try {
        const verificationToken = await this.generateAndStoreVerificationToken(user.id);
        const apiUrl = process.env.API_URL || process.env.PUBLIC_API_URL || `http://localhost:${process.env.PORT || 3000}`;
        const verifyLink = `${apiUrl.replace(/\/$/, '')}/auth/verify-email?token=${verificationToken}`;
        await this.usersService.sendEmailVerificationWithLink(user, verifyLink, undefined);
      } catch (emailErr) {
        console.error("Error sending verification email after password reset:", emailErr);
      }
      return {
        success: true,
        message: "Your password was updated successfully. We also sent you a new verification email.",
      };
    }

    return {
      success: true,
      message: "Senha atualizada com sucesso",
    };
  }

  async verifyEmail(token: string): Promise<BaseResult> {
    if (!token || typeof token !== 'string' || token.length < 32) {
      return { success: false, message: "Token inválido ou expirado" };
    }

    const tokenHash = hashToken(token);

    const user = await this.prismaService.user.findFirst({
      where: {
        verificationTokenHash: tokenHash,
        emailVerified: false,
      },
    });

    if (!user) {
      return { success: false, message: "Token inválido ou expirado" };
    }

    if (!user.verificationTokenExpiresAt || user.verificationTokenExpiresAt < new Date()) {
      return { success: false, message: "Token expirado. Solicite um novo link de verificação." };
    }

    if (user.emailVerified) {
      return { success: true, message: "Email já estava verificado" };
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        verificationTokenHash: null,
        verificationTokenExpiresAt: null,
      },
    });

    return { success: true, message: "Email verificado com sucesso" };
  }

  /** Resend verification email. Always returns generic 200 message (prevent email enumeration). */
  async resendVerificationEmail(email: string, ip: string): Promise<BaseResult> {
    const generic = { success: true, message: "If an account exists with this email, a verification email has been sent." };
    const normalizedEmail = email?.toLowerCase?.()?.trim() || '';
    if (!normalizedEmail) {
      return generic;
    }

    if (!ipRateLimiter(`resend:ip:${ip}`)) {
      return generic;
    }
    if (!emailRateLimiter(`resend:email:${normalizedEmail}`)) {
      return generic;
    }

    const user = await this.prismaService.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user || user.emailVerified) {
      return generic;
    }

    try {
      const token = await this.generateAndStoreVerificationToken(user.id);
      const apiUrl = process.env.API_URL || process.env.PUBLIC_API_URL || `http://localhost:${process.env.PORT || 3000}`;
      const verifyLink = `${apiUrl.replace(/\/$/, '')}/auth/verify-email?token=${token}`;
      await this.usersService.sendEmailVerificationWithLink(user, verifyLink, undefined);
    } catch (err) {
      console.error("Error resending verification email:", err);
    }

    return generic;
  }
}