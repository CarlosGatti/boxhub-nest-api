import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

interface TokenPayload {
  name?: string;
  discountId: string;
  iat?: number;
}

@Injectable()
export class TjService {
  private getSecret(): string {
    const secret = process.env.TJ_PASS_SECRET;
    if (!secret || secret.length < 32) {
      throw new Error('TJ_PASS_SECRET must be at least 32 characters');
    }
    return secret;
  }

  async mintToken(name: string | undefined, discountId: string): Promise<string> {
    // Validate discountId format
    if (!/^[0-9]{6,20}$/.test(discountId)) {
      throw new BadRequestException('Invalid discountId format. Must be 6-20 digits.');
    }

    const secret = this.getSecret();

    const payload: TokenPayload = {
      discountId,
    };

    if (name) {
      payload.name = name;
    }

    const token = jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn: '365d', // Token expires in 365 days
    });

    return token;
  }

  async verifyToken(token: string): Promise<{ name: string; discountId: string }> {
    if (!token) {
      throw new BadRequestException('Missing token');
    }

    try {
      const secret = this.getSecret();
      const payload = jwt.verify(token, secret, {
        algorithms: ['HS256'],
      }) as TokenPayload;

      const name = typeof payload?.name === 'string' ? payload.name : '';
      const discountId =
        typeof payload?.discountId === 'string' ? payload.discountId : '';

      if (!discountId) {
        throw new BadRequestException('Invalid payload');
      }

      return { name, discountId };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      // jwt.verify throws JsonWebTokenError or TokenExpiredError
      if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Invalid or expired token');
      }
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
