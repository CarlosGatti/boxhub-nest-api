import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const EMAIL_NOT_VERIFIED_CODE = 'EMAIL_NOT_VERIFIED';

@Injectable()
export class EmailVerifiedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = this.getRequest(context);
    const user = request?.user;

    if (!user) {
      throw new ForbiddenException({
        code: EMAIL_NOT_VERIFIED_CODE,
        message: 'Authentication required',
      });
    }

    if (user.emailVerified !== true) {
      throw new ForbiddenException({
        code: EMAIL_NOT_VERIFIED_CODE,
        message:
          'Your email has not been verified. Please check your inbox and click the verification link before accessing this service.',
      });
    }

    return true;
  }

  private getRequest(context: ExecutionContext) {
    const type = context.getType<string>();
    if (type === 'http') {
      return context.switchToHttp().getRequest();
    }
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
