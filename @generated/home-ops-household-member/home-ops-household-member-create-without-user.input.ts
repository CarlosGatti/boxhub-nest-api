import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseholdRole } from '../prisma/household-role.enum';
import { HomeOpsHouseholdCreateNestedOneWithoutMembersInput } from '../home-ops-household/home-ops-household-create-nested-one-without-members.input';

@InputType()
export class HomeOpsHouseholdMemberCreateWithoutUserInput {

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
}
