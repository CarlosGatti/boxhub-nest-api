import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanUpdateWithoutHouseholdInput } from './home-ops-weekly-plan-update-without-household.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => HomeOpsWeeklyPlanUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateWithoutHouseholdInput)
    data!: HomeOpsWeeklyPlanUpdateWithoutHouseholdInput;
}
