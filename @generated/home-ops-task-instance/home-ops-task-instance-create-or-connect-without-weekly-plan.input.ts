import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput } from './home-ops-task-instance-create-without-weekly-plan.input';

@InputType()
export class HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput)
    create!: HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput;
}
