import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutAssigneeInput } from './home-ops-task-instance-create-without-assignee.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput } from './home-ops-task-instance-create-or-connect-without-assignee.input';
import { HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutAssigneeInput } from './home-ops-task-instance-upsert-with-where-unique-without-assignee.input';
import { HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope } from './home-ops-task-instance-create-many-assignee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutAssigneeInput } from './home-ops-task-instance-update-with-where-unique-without-assignee.input';
import { HomeOpsTaskInstanceUpdateManyWithWhereWithoutAssigneeInput } from './home-ops-task-instance-update-many-with-where-without-assignee.input';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedUpdateManyWithoutAssigneeNestedInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutAssigneeInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput>;

    @Field(() => [HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutAssigneeInput)
    upsert?: Array<HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutAssigneeInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope;

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

    @Field(() => [HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutAssigneeInput)
    update?: Array<HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutAssigneeInput>;

    @Field(() => [HomeOpsTaskInstanceUpdateManyWithWhereWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateManyWithWhereWithoutAssigneeInput)
    updateMany?: Array<HomeOpsTaskInstanceUpdateManyWithWhereWithoutAssigneeInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskInstanceScalarWhereInput>;
}
