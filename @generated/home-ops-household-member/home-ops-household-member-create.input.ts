import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseholdRole } from '../prisma/household-role.enum';
import { HomeOpsHouseholdCreateNestedOneWithoutMembersInput } from '../home-ops-household/home-ops-household-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutHomeOpsHouseholdMembershipsInput } from '../user/user-create-nested-one-without-home-ops-household-memberships.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdMemberCreateInput {

    @Field(() => HouseholdRole, {nullable:true})
    role?: keyof typeof HouseholdRole;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsHouseholdCreateNestedOneWithoutMembersInput, {nullable:false})
    household!: HomeOpsHouseholdCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutHomeOpsHouseholdMembershipsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutHomeOpsHouseholdMembershipsInput)
    user!: UserCreateNestedOneWithoutHomeOpsHouseholdMembershipsInput;
}
