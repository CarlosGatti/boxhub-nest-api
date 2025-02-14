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

@ObjectType()
export class SingleUserResult {
  @Field(() => User)
  user: User | null;

  @Field(() => Boolean)
  isFollowing: boolean;
}
