import { ExtractJwt, Strategy } from 'passport-jwt';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { EMAIL_NOT_VERIFIED_CODE } from '../guards/email-verified.guard';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET || '97742c5c0c5ea59ab16e61af76825b8b',
      ignoreExpiration: false,
    });
  }

  // todo - type this
  async validate(payload: any) {
    const user = await this.authService.validateJwtPayload(payload);

    if (!user) {
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials',
      );
    }

    if (user.emailVerified !== true) {
      throw new ForbiddenException({
        code: EMAIL_NOT_VERIFIED_CODE,
        message:
          'Your email has not been verified. Please check your inbox and click the verification link before accessing this service.',
      });
    }

    return user;
  }
}
