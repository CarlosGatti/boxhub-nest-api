import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanUpdateInput } from './home-ops-weekly-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanUpdateInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateInput)
    data!: HomeOpsWeeklyPlanUpdateInput;

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;
}
