import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutWeeklyPlansInput } from './home-ops-household-create-without-weekly-plans.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutWeeklyPlansInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutWeeklyPlansInput)
    create!: HomeOpsHouseholdCreateWithoutWeeklyPlansInput;
}
