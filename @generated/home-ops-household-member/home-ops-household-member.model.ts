import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseholdRole } from '../prisma/household-role.enum';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { User } from '../user/user.model';

@ObjectType()
export class HomeOpsHouseholdMember {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => HouseholdRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof HouseholdRole;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HomeOpsHousehold, {nullable:false})
    household?: HomeOpsHousehold;

    @Field(() => User, {nullable:false})
    user?: User;
}
