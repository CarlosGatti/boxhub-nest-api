import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPrivacy } from './community-privacy.enum';
import { NestedEnumCommunityPrivacyFilter } from './nested-enum-community-privacy-filter.input';

@InputType()
export class EnumCommunityPrivacyFilter {

    @Field(() => CommunityPrivacy, {nullable:true})
    equals?: keyof typeof CommunityPrivacy;

    @Field(() => [CommunityPrivacy], {nullable:true})
    in?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => [CommunityPrivacy], {nullable:true})
    notIn?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => NestedEnumCommunityPrivacyFilter, {nullable:true})
    not?: NestedEnumCommunityPrivacyFilter;
}
