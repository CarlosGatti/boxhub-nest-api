import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityPrivacy } from './community-privacy.enum';

@InputType()
export class NestedEnumCommunityPrivacyFilter {

    @Field(() => CommunityPrivacy, {nullable:true})
    equals?: keyof typeof CommunityPrivacy;

    @Field(() => [CommunityPrivacy], {nullable:true})
    in?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => [CommunityPrivacy], {nullable:true})
    notIn?: Array<keyof typeof CommunityPrivacy>;

    @Field(() => NestedEnumCommunityPrivacyFilter, {nullable:true})
    not?: NestedEnumCommunityPrivacyFilter;
}
