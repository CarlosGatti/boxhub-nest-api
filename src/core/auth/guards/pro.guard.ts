import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'

import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class ProGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const request = ctx.getContext().req
    const user = request.user

    if (!user) {
      throw new ForbiddenException('User not authenticated')
    }

    const now = new Date()

    const isPremiumValid =
      user.isPremium === true &&
      user.expiresAt &&
      new Date(user.expiresAt).getTime() > now.getTime()

    const isTrialValid =
      user.isPremium === false &&
      user.willExpireAt &&
      new Date(user.willExpireAt).getTime() > now.getTime()

    if (!isPremiumValid && !isTrialValid) {
      throw new ForbiddenException('Pro access required')
    }

    return true
  }
}
