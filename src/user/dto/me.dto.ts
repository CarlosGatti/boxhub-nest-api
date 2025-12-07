import { Field, ObjectType, OmitType } from '@nestjs/graphql';

import { StorageMember } from '@generated/storage-member/storage-member.model';
import { User } from '../../../@generated/user/user.model';

@ObjectType()
export class MeDto extends OmitType(User, ['apps'] as const) {
  @Field(() => [User])
  peopleImFollowing?: User[];

  @Field(() => [User])
  peopleFollowingMe?: User[];

  @Field(() => [StorageMember], { nullable: true })
  storageMemberships?: StorageMember[];

  // Sobrescrever apps para retornar array de strings
  @Field(() => [String], { nullable: true })
  apps?: string[];
}
