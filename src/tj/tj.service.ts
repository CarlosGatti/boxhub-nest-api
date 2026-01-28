import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { SignJWT, jwtVerify } from 'jose';

@Injectable()
export class TjService {
  private getSecret(): Uint8Array {
    const secret = process.env.TJ_PASS_SECRET;
    if (!secret || secret.length < 32) {
      throw new Error('TJ_PASS_SECRET must be at least 32 characters');
    }
    return new TextEncoder().encode(secret);
  }

  async mintToken(name: string | undefined, discountId: string): Promise<string> {
    // Validate discountId format
    if (!/^[0-9]{6,20}$/.test(discountId)) {
      throw new BadRequestException('Invalid discountId format. Must be 6-20 digits.');
    }

    const secret = this.getSecret();

    const token = await new SignJWT({
      name: name || undefined,
      discountId,
    })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('365d') // Token expires in 365 days
      .sign(secret);

    return token;
  }

  async verifyToken(token: string): Promise<{ name: string; discountId: string }> {
    if (!token) {
      throw new BadRequestException('Missing token');
    }

    try {
      const secret = this.getSecret();
      const { payload } = await jwtVerify(token, secret, {
        algorithms: ['HS256'],
      });

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
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
