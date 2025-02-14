import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberRole } from './community-member-role.enum';
import { NestedEnumCommunityMemberRoleFilter } from './nested-enum-community-member-role-filter.input';

@InputType()
export class EnumCommunityMemberRoleFilter {

    @Field(() => CommunityMemberRole, {nullable:true})
    equals?: keyof typeof CommunityMemberRole;

    @Field(() => [CommunityMemberRole], {nullable:true})
    in?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => [CommunityMemberRole], {nullable:true})
    notIn?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => NestedEnumCommunityMemberRoleFilter, {nullable:true})
    not?: NestedEnumCommunityMemberRoleFilter;
}
