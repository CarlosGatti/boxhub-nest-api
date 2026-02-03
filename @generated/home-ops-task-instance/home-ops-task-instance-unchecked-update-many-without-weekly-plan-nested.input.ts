import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput } from './home-ops-task-instance-create-without-weekly-plan.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput } from './home-ops-task-instance-create-or-connect-without-weekly-plan.input';
import { HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutWeeklyPlanInput } from './home-ops-task-instance-upsert-with-where-unique-without-weekly-plan.input';
import { HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope } from './home-ops-task-instance-create-many-weekly-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutWeeklyPlanInput } from './home-ops-task-instance-update-with-where-unique-without-weekly-plan.input';
import { HomeOpsTaskInstanceUpdateManyWithWhereWithoutWeeklyPlanInput } from './home-ops-task-instance-update-many-with-where-without-weekly-plan.input';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedUpdateManyWithoutWeeklyPlanNestedInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutWeeklyPlanInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutWeeklyPlanInput>;

    @Field(() => [HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutWeeklyPlanInput)
    upsert?: Array<HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutWeeklyPlanInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutWeeklyPlanInput)
    update?: Array<HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutWeeklyPlanInput>;

    @Field(() => [HomeOpsTaskInstanceUpdateManyWithWhereWithoutWeeklyPlanInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateManyWithWhereWithoutWeeklyPlanInput)
    updateMany?: Array<HomeOpsTaskInstanceUpdateManyWithWhereWithoutWeeklyPlanInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskInstanceScalarWhereInput>;
}
