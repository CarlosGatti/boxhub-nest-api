import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

export const APP_CODE_KEY = 'appCode';

// Decorator para especificar o código do app necessário (REST version)
export const RequireAppRest = (appCode: string) => SetMetadata(APP_CODE_KEY, appCode);

@Injectable()
export class AppPermissionRestGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    // Obtém o código do app do metadata
    const requiredAppCode = this.reflector.get<string>(
      APP_CODE_KEY,
      context.getHandler(),
    );

    if (!requiredAppCode) {
      // Se não há app especificado, permite acesso (compatibilidade com código antigo)
      return true;
    }

    const userApps = (user as any).apps || [];

    if (!Array.isArray(userApps)) {
      throw new ForbiddenException(
        `Access denied: User does not have access to ${requiredAppCode}`,
      );
    }

    if (!userApps.includes(requiredAppCode)) {
      throw new ForbiddenException(
        `Access denied: User does not have access to ${requiredAppCode}`,
      );
    }

    return true;
  }
}
