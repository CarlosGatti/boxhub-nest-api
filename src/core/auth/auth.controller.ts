import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ResendVerificationDto } from './dto/resend-verification.dto';

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
    const result = await this.authService.resendVerificationEmail(dto?.email ?? '', ip);
    return res.status(200).json(result);
  }

  @Get('verify-email')
  async verifyEmail(
    @Query('token') token: string,
    @Res() res: Response,
  ) {
    if (!token) {
      const frontendUrl = process.env.FRONTEND_URL || 'https://carlosgatti.com';
      return res.redirect(
        `${frontendUrl}/verify-email?error=missing_token`,
      );
    }

    try {
      const result = await this.authService.verifyEmail(token);
      const frontendUrl = process.env.FRONTEND_URL || 'https://carlosgatti.com';
      
      if (result.success) {
        // Redirect to frontend with success message
        return res.redirect(
          `${frontendUrl}/verify-email?success=true&message=${encodeURIComponent(result.message)}`,
        );
      } else {
        // Redirect to frontend with error message
        return res.redirect(
          `${frontendUrl}/verify-email?error=${encodeURIComponent(result.message)}`,
        );
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      const frontendUrl = process.env.FRONTEND_URL || 'https://carlosgatti.com';
      return res.redirect(
        `${frontendUrl}/verify-email?error=${encodeURIComponent('Invalid or expired token')}`,
      );
    }
  }
}