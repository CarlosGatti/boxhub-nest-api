import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ResendVerificationDto } from './dto/resend-verification.dto';
import { buildVerifyEmailRedirectUrl } from './utils/resolve-frontend-url.util';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('resend-verification')
  async resendVerification(
    @Body() dto: ResendVerificationDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const ip = (req.ip || req.socket?.remoteAddress || req.headers?.['x-forwarded-for'] || 'unknown').toString();
    const result = await this.authService.resendVerificationEmail(
      dto?.email ?? '',
      ip,
      dto?.appCode,
    );
    return res.status(200).json(result);
  }

  @Get('verify-email')
  async verifyEmail(
    @Query('token') token: string,
    @Query('app') appCode: string | undefined,
    @Res() res: Response,
  ) {
    if (!token) {
      return res.redirect(
        buildVerifyEmailRedirectUrl(appCode, { error: 'missing_token' }),
      );
    }

    try {
      const result = await this.authService.verifyEmail(token);

      if (result.success) {
        return res.redirect(
          buildVerifyEmailRedirectUrl(appCode, {
            success: 'true',
            message: result.message,
          }),
        );
      }

      return res.redirect(
        buildVerifyEmailRedirectUrl(appCode, { error: result.message }),
      );
    } catch (error) {
      console.error('Error verifying email:', error);
      return res.redirect(
        buildVerifyEmailRedirectUrl(appCode, {
          error: 'Invalid or expired token',
        }),
      );
    }
  }
}
