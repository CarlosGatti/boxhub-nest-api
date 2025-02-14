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

@InputType()
export class CommunityScalarWhereInput {

    @Field(() => [CommunityScalarWhereInput], {nullable:true})
    AND?: Array<CommunityScalarWhereInput>;

    @Field(() => [CommunityScalarWhereInput], {nullable:true})
    OR?: Array<CommunityScalarWhereInput>;

    @Field(() => [CommunityScalarWhereInput], {nullable:true})
    NOT?: Array<CommunityScalarWhereInput>;

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
}
