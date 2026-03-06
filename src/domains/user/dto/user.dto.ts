import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

import { User } from '@generated/user/user.model';

@InputType()
export class LoginUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @MinLength(1)
  password: string;
}

@ObjectType()
export class LoginUser {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  profilePicture?: string | null;

  @Field(() => String, { nullable: true })
  apartment?: string | null;

  @Field(() => Boolean)
  isApprovedResident: boolean;

  @Field(() => Boolean)
  isAdmin: boolean;

  @Field(() => [String], { nullable: true })
  apps?: string[];
}

@ObjectType()
export class LoginResult {
  @Field(() => LoginUser)
  user: LoginUser;

  @Field(() => String)
  token: string;
}

/** Register response: when emailVerified=true returns user+token; when false returns message+email (no token). */
@ObjectType()
export class RegisterResponse {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Boolean, { description: 'True when user must verify email before accessing the app' })
  requiresVerification: boolean;

  @Field(() => LoginUser, { nullable: true })
  user?: LoginUser;

  @Field(() => String, { nullable: true })
  token?: string;
}

@InputType()
export class RegisterUserInput {
  @Field(() => String)
  @IsString()
  @MinLength(1)
  firstName: string;

  @Field(() => String)
  @IsString()
  @MinLength(1)
  lastName: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @MinLength(8)
  password: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  public?: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  apartment?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  appCode?: string;
}

@ObjectType()
export class SingleUserResult {
  @Field(() => User)
  user: User | null;

  @Field(() => Boolean)
  isFollowing: boolean;
}
