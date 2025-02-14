import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Community } from '../../../@generated/community/community.model';

@ObjectType()
export class CommunityDto extends Community {
  @Field(() => Boolean)
  isMember: boolean;

  @Field(() => Int)
  count: number;
}
