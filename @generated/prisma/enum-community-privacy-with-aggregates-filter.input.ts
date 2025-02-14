import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPrivacy } from './community-privacy.enum';
import { NestedEnumCommunityPrivacyWithAggregatesFilter } from './nested-enum-community-privacy-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommunityPrivacyFilter } from './nested-enum-community-privacy-filter.input';

@InputType()
export class EnumCommunityPrivacyWithAggregatesFilter {

    @Field(() => CommunityPrivacy, {nullable:true})
    equals?: keyof typeof CommunityPrivacy;

    @Field(() => [CommunityPrivacy], {nullable:true})
    in?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => [CommunityPrivacy], {nullable:true})
    notIn?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => NestedEnumCommunityPrivacyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommunityPrivacyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommunityPrivacyFilter, {nullable:true})
    _min?: NestedEnumCommunityPrivacyFilter;

    @Field(() => NestedEnumCommunityPrivacyFilter, {nullable:true})
    _max?: NestedEnumCommunityPrivacyFilter;
}
