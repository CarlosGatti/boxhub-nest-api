import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { CommunityMemberRole } from '../prisma/community-member-role.enum';
import { CommunityCreateNestedOneWithoutMembersInput } from '../community/community-create-nested-one-without-members.input';

@InputType()
export class CommunityMemberCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MembershipStatus, {nullable:true})
    status?: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => CommunityMemberRole, {nullable:true})
    role?: keyof typeof CommunityMemberRole;

    @Field(() => CommunityCreateNestedOneWithoutMembersInput, {nullable:false})
    community!: CommunityCreateNestedOneWithoutMembersInput;
}
