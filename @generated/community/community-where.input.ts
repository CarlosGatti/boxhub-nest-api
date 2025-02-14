import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumCommunityPrivacyFilter } from '../prisma/enum-community-privacy-filter.input';
import { CommunityPlanNullableRelationFilter } from '../community-plan/community-plan-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { CommunityNullableRelationFilter } from './community-nullable-relation-filter.input';
import { CommunityListRelationFilter } from './community-list-relation-filter.input';
import { CommunityMemberListRelationFilter } from '../community-member/community-member-list-relation-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';
import { FacetListRelationFilter } from '../facet/facet-list-relation-filter.input';
import { PublicationListRelationFilter } from '../publication/publication-list-relation-filter.input';

@InputType()
export class CommunityWhereInput {

    @Field(() => [CommunityWhereInput], {nullable:true})
    AND?: Array<CommunityWhereInput>;

    @Field(() => [CommunityWhereInput], {nullable:true})
    OR?: Array<CommunityWhereInput>;

    @Field(() => [CommunityWhereInput], {nullable:true})
    NOT?: Array<CommunityWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    ownerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityPlanId?: IntNullableFilter;

    @Field(() => EnumCommunityPrivacyFilter, {nullable:true})
    postEnabledRole?: EnumCommunityPrivacyFilter;

    @Field(() => EnumCommunityPrivacyFilter, {nullable:true})
    inviteEnabledRole?: EnumCommunityPrivacyFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentCommunityId?: IntNullableFilter;

    @Field(() => CommunityPlanNullableRelationFilter, {nullable:true})
    plan?: CommunityPlanNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    owner?: UserNullableRelationFilter;

    @Field(() => CommunityNullableRelationFilter, {nullable:true})
    parentCommunity?: CommunityNullableRelationFilter;

    @Field(() => CommunityListRelationFilter, {nullable:true})
    groups?: CommunityListRelationFilter;

    @Field(() => CommunityMemberListRelationFilter, {nullable:true})
    members?: CommunityMemberListRelationFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    events?: EventListRelationFilter;

    @Field(() => FacetListRelationFilter, {nullable:true})
    facets?: FacetListRelationFilter;

    @Field(() => PublicationListRelationFilter, {nullable:true})
    publications?: PublicationListRelationFilter;
}
