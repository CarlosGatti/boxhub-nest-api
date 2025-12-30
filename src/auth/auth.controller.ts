import { Controller, Get, Query, Res, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('verify-email')
  async verifyEmail(
    @Query('token') token: string,
    @Res() res: Response,
  ) {
    if (!token) {
      const frontendUrl = process.env.FRONTEND_URL || 'https://www.discart.me';
      return res.redirect(
        `${frontendUrl}/verify-email?error=missing_token`,
      );
    }

    try {
      const result = await this.authService.verifyEmail(token);
      const frontendUrl = process.env.FRONTEND_URL || 'https://www.discart.me';
      
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
      const frontendUrl = process.env.FRONTEND_URL || 'https://www.discart.me';
      return res.redirect(
        `${frontendUrl}/verify-email?error=${encodeURIComponent('Invalid or expired token')}`,
      );
    }
  }
}