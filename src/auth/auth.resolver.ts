import { BaseResult } from './../models/base-error.dto';
import { Resolver, Args, Context, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { User } from '../../@generated/user/user.model';
import { LoginResult, LoginUserInput } from '../user/dto/user.dto';

type Login = {
  user: User;
  token: string;
};

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(() => LoginResult)
  async login(@Args('user') user: LoginUserInput, @Context('req') request: any): Promise<LoginResult> {
   console.log('Login attempt with user:', user);
    const result = await this.authService.validateUserByPassword(user, request.user?.id, request.ip || request.headers['x-forwarded-for'] || '');

    if (result) return result;
    throw new BadRequestException(
      'Could not log-in with the provided credentials',
    );
  }

  // There is no username guard here because if the person has the token, they can be any user
  @Mutation(() => String)
  async refreshToken(@Context('req') request: any): Promise<string> {
    const user: User = request.user;
    if (!user)
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials',
      );
    const result = await this.authService.createJwt(user);
    if (result) return result.token;
    throw new UnauthorizedException(
      'Could not log-in with the provided credentials',
    );
  }

  @Mutation(() => BaseResult, { name: 'requestPasswordReset' })
  requestPasswordReset(@Args('email') email: string) {
    console.log('Requesting password reset for:', email);
    return this.authService.requestPasswordReset(email);
  }

  @Mutation(() => BaseResult, { name: 'resetPassword' })
  resetPassword(@Args('token') token: string, @Args('password') password: string) {
    console.log('Resetting password with token:', token);
    return this.authService.resetPassword(token, password);
  }


}
