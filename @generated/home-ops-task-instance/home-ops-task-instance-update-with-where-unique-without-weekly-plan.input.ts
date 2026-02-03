import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateWithoutWeeklyPlanInput } from './home-ops-task-instance-update-without-weekly-plan.input';

@InputType()
export class HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutWeeklyPlanInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceUpdateWithoutWeeklyPlanInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateWithoutWeeklyPlanInput)
    data!: HomeOpsTaskInstanceUpdateWithoutWeeklyPlanInput;
}
