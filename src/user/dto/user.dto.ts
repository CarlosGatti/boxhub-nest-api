import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { User } from '../../../@generated/user/user.model';

@InputType()
export class LoginUserInput {
  @Field(() => String)
  email?: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class LoginResult {
  @Field(() => User)
  user: User;

  @Field(() => String)
  token: string;
}

@InputType()
export class RegisterUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Boolean, { nullable: true })
  public?: boolean;

  @Field(() => String, { nullable: true })
  apartment?: string;
}

@ObjectType()
export class SingleUserResult {
  @Field(() => User)
  user: User | null;

  @Field(() => Boolean)
  isFollowing: boolean;
}
