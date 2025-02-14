import {
  ArgsType,
  Field,
  InputType,
  OmitType,
  createUnionType,
  ObjectType,
} from '@nestjs/graphql';

import { BaseResult } from '../../models/base-error.dto';
import { Community } from '../../../@generated/community/community.model';
import { CommunityCreateInput } from '../../../@generated/community/community-create.input';
import { CommunityPlanCreateInput } from '../../../@generated/community-plan/community-plan-create.input';
import { Event } from '@prisma/client';
import { Event as EventGQL } from '@generated/event/event.model';

@ArgsType()
export class AddCommunityMemberProps {
  @Field(() => Number, { nullable: false })
  communityId: number;
}

@ArgsType()
export class DeleteCommunityProps {
  @Field(() => Number, { nullable: false })
  communityId: number;
}

@ArgsType()
export class GetCommunityProps {
  @Field(() => Number, { nullable: false })
  communityId: number;
}

@ArgsType()
export class SearchCommunitiesProps {
  @Field(() => String, { nullable: false })
  searchString: string;
}

@InputType()
export class CreateCommunityInput extends OmitType(CommunityCreateInput, [
  'plan',
  'facets',
  'owner',
  'events',
  'groups',
  'members',
  'parentCommunity',
  'publications',
]) {
  @Field(() => CommunityPlanCreateInput, { nullable: true })
  plan: CommunityPlanCreateInput;
}

@InputType()
export class UpdateCommunityInput extends OmitType(CommunityCreateInput, [
  'plan',
  'facets',
  'owner',
  'events',
  'groups',
  'members',
  'parentCommunity',
  'publications',
  'name',
]) {
  @Field(() => Number, { nullable: false })
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => CommunityPlanCreateInput, { nullable: true })
  plan: CommunityPlanCreateInput;
}

@InputType()
export class CommunityList {
  @Field(() => [Community], { nullable: true })
  communities?: Community[];
}

export const CommunityResult = createUnionType({
  name: 'CommunityResult',
  types: () => [CommunityList, BaseResult] as const,
});

@ObjectType()
export class CommunityEventsProps {
  @Field(() => [EventGQL], { nullable: false })
  events: [Event];
}
