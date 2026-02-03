import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;
}
