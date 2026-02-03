import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput } from './home-ops-task-instance-create-without-weekly-plan.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput } from './home-ops-task-instance-create-or-connect-without-weekly-plan.input';
import { HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope } from './home-ops-task-instance-create-many-weekly-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutWeeklyPlanInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;
}
