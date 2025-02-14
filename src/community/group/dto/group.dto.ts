import { Field, Int } from '@nestjs/graphql';

import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateCommunityGroupProps {
  //   @Field(() => CommunityGroupCreateInput, { nullable: false })
  //   @Type(() => CommunityGroupCreateInput)
  //   data!: CommunityGroupCreateInput;
  //   @Field(() => Number, { nullable: false })
  //   @Type(() => Number)
  //   community_id: number;
  // }
  // @ArgsType()
  // export class AddCommunityGroupMemberProps {
  //   @Field(() => Number, { nullable: false })
  //   groupId: number;
  // }
  // @ArgsType()
  // export class DeleteCommunityGroupProps {
  //   @Field(() => Number, { nullable: false })
  //   groupId: number;
  // }
  // @ArgsType()
  // export class GetCommunityGroupProps {
  //   @Field(() => Number, { nullable: false })
  //   groupId: number;
  // }
  // @ArgsType()
  // export class SearchCommunitiesGroupsProps {
  //   @Field(() => String, { nullable: false })
  //   searchString: string;
  // }
}
