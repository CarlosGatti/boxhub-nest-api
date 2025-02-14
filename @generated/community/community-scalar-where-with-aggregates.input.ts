import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumVisibilityWithAggregatesFilter } from '../prisma/enum-visibility-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumCommunityPrivacyWithAggregatesFilter } from '../prisma/enum-community-privacy-with-aggregates-filter.input';

@InputType()
export class CommunityScalarWhereWithAggregatesInput {

    @Field(() => [CommunityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommunityScalarWhereWithAggregatesInput>;

    @Field(() => [CommunityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommunityScalarWhereWithAggregatesInput>;

    @Field(() => [CommunityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommunityScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    profilePicture?: StringNullableWithAggregatesFilter;

    @Field(() => EnumVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumVisibilityWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    published?: BoolNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    ownerId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    communityPlanId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumCommunityPrivacyWithAggregatesFilter, {nullable:true})
    postEnabledRole?: EnumCommunityPrivacyWithAggregatesFilter;

    @Field(() => EnumCommunityPrivacyWithAggregatesFilter, {nullable:true})
    inviteEnabledRole?: EnumCommunityPrivacyWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    parentCommunityId?: IntNullableWithAggregatesFilter;
}
