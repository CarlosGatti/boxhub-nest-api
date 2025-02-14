import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../../../@generated/user/user.model';

@ObjectType()
export class MeDto extends User {
  @Field(() => [User])
  peopleImFollowing?: User[];

  @Field(() => [User])
  peopleFollowingMe?: User[];
}
