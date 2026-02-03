import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutAssigneeInput } from './home-ops-task-instance-create-without-assignee.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput } from './home-ops-task-instance-create-or-connect-without-assignee.input';
import { HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope } from './home-ops-task-instance-create-many-assignee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@InputType()
export class HomeOpsTaskInstanceCreateNestedManyWithoutAssigneeInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutAssigneeInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;
}
