import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutCompletedByInput } from './home-ops-task-instance-create-without-completed-by.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput } from './home-ops-task-instance-create-or-connect-without-completed-by.input';
import { HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope } from './home-ops-task-instance-create-many-completed-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@InputType()
export class HomeOpsTaskInstanceCreateNestedManyWithoutCompletedByInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutCompletedByInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutCompletedByInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;
}
