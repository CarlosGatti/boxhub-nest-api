import { Field, ObjectType } from '@nestjs/graphql';

import { StorageMember } from '@generated/storage-member/storage-member.model';
import { User } from '@generated/user/user.model';

@ObjectType()
export class MeDto extends User {
  @Field(() => [User])
  peopleImFollowing?: User[];

  @Field(() => [User])
  peopleFollowingMe?: User[];

  @Field(() => [StorageMember], { nullable: true })
  storageMemberships?: StorageMember[];

  // Sobrescrever apps para retornar array de strings
  @Field(() => [String], { nullable: true })
  apps?: any;
}
