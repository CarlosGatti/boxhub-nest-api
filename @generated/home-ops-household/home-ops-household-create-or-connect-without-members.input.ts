import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutMembersInput } from './home-ops-household-create-without-members.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutMembersInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutMembersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutMembersInput)
    create!: HomeOpsHouseholdCreateWithoutMembersInput;
}
