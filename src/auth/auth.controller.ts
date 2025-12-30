import { Controller, Get, Post, Body, Query, Res, Req, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { JwtRestGuard } from './guards/jwt-rest.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Req() req: Request) {
    const ipAddress = req.ip || req.headers['x-forwarded-for'] as string || 'unknown';
    return this.authService.loginRest(loginDto, ipAddress);
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshDto) {
    return this.authService.refresh(refreshDto);
  }

  @Post('logout')
  async logout(@Body() refreshDto: RefreshDto) {
    await this.authService.logout(refreshDto.refreshToken);
    return { message: 'Logged out successfully' };
  }

  @Get('me')
  @UseGuards(JwtRestGuard)
  async getMe(@Req() req: Request) {
    const user = (req as any).user;
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      nickname: user.nickname,
      profilePicture: user.profilePicture,
    };
  }

  @Get('verify-email')
  async verifyEmail(
    @Query('token') token: string,
    @Res() res: Response,
  ) {
    const frontendUrl = process.env.FRONTEND_URL || 'https://www.discart.me';
    const loginPage = process.env.FRONTEND_LOGIN_PAGE || '/login';
    const welcomePage = process.env.FRONTEND_WELCOME_PAGE || '/welcome';
    
    if (!token) {
      // Se não houver token, redireciona para login com erro
      return res.redirect(
        `${frontendUrl}${loginPage}?error=missing_token&message=${encodeURIComponent('Token de verificação não fornecido')}`,
      );
    }

    try {
      const result = await this.authService.verifyEmail(token);
      
      if (result.success) {
        // Verificação bem-sucedida: redireciona para página de boas-vindas ou login
        // Prioriza welcome page se configurada, senão vai para login com mensagem de sucesso
        const redirectPage = welcomePage !== '/welcome' ? welcomePage : loginPage;
        const successParam = welcomePage !== '/welcome' 
          ? `?emailVerified=true&message=${encodeURIComponent(result.message)}`
          : `?emailVerified=true&message=${encodeURIComponent('Email verificado com sucesso! Você já pode fazer login.')}`;
        
        return res.redirect(
          `${frontendUrl}${redirectPage}${successParam}`,
        );
      } else {
        // Erro na verificação: redireciona para login com erro
        return res.redirect(
          `${frontendUrl}${loginPage}?error=verification_failed&message=${encodeURIComponent(result.message)}`,
        );
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      return res.redirect(
        `${frontendUrl}${loginPage}?error=invalid_token&message=${encodeURIComponent('Token inválido ou expirado. Por favor, solicite um novo link de verificação.')}`,
      );
    }
  }
}

