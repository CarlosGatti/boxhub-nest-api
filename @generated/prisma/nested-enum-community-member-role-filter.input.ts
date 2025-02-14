import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberRole } from './community-member-role.enum';

@InputType()
export class NestedEnumCommunityMemberRoleFilter {

    @Field(() => CommunityMemberRole, {nullable:true})
    equals?: keyof typeof CommunityMemberRole;

    @Field(() => [CommunityMemberRole], {nullable:true})
    in?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => [CommunityMemberRole], {nullable:true})
    notIn?: Array<keyof typeof CommunityMemberRole>;

    @Field(() => NestedEnumCommunityMemberRoleFilter, {nullable:true})
    not?: NestedEnumCommunityMemberRoleFilter;
}
