import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberRole } from './community-member-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommunityMemberRoleFilter } from './nested-enum-community-member-role-filter.input';

@InputType()
export class NestedEnumCommunityMemberRoleWithAggregatesFilter {

    @Field(() => CommunityMemberRole, {nullable:true})
    equals?: keyof typeof CommunityMemberRole;

    @Field(() => [CommunityMemberRole], {nullable:true})
    in?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => [CommunityMemberRole], {nullable:true})
    notIn?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => NestedEnumCommunityMemberRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommunityMemberRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommunityMemberRoleFilter, {nullable:true})
    _min?: NestedEnumCommunityMemberRoleFilter;

    @Field(() => NestedEnumCommunityMemberRoleFilter, {nullable:true})
    _max?: NestedEnumCommunityMemberRoleFilter;
}
