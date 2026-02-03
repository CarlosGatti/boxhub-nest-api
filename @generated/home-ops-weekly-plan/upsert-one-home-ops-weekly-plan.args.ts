import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateInput } from './home-ops-weekly-plan-create.input';
import { HomeOpsWeeklyPlanUpdateInput } from './home-ops-weekly-plan-update.input';

@ArgsType()
export class UpsertOneHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => HomeOpsWeeklyPlanCreateInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateInput)
    create!: HomeOpsWeeklyPlanCreateInput;

    @Field(() => HomeOpsWeeklyPlanUpdateInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateInput)
    update!: HomeOpsWeeklyPlanUpdateInput;
}
