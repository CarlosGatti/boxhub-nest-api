import { ExecutionContext, Injectable } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    return request;
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new AuthenticationError('Could not authenticate with token');
    }
    return user;
  }
}
