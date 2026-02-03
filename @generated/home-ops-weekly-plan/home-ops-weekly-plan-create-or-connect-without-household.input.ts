import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateWithoutHouseholdInput } from './home-ops-weekly-plan-create-without-household.input';

@InputType()
export class HomeOpsWeeklyPlanCreateOrConnectWithoutHouseholdInput {

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => HomeOpsWeeklyPlanCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutHouseholdInput)
    create!: HomeOpsWeeklyPlanCreateWithoutHouseholdInput;
}
