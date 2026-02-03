import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutCompletedByInput } from './home-ops-task-instance-create-without-completed-by.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput } from './home-ops-task-instance-create-or-connect-without-completed-by.input';
import { HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutCompletedByInput } from './home-ops-task-instance-upsert-with-where-unique-without-completed-by.input';
import { HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope } from './home-ops-task-instance-create-many-completed-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutCompletedByInput } from './home-ops-task-instance-update-with-where-unique-without-completed-by.input';
import { HomeOpsTaskInstanceUpdateManyWithWhereWithoutCompletedByInput } from './home-ops-task-instance-update-many-with-where-without-completed-by.input';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedUpdateManyWithoutCompletedByNestedInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutCompletedByInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutCompletedByInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutCompletedByInput>;

    @Field(() => [HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutCompletedByInput)
    upsert?: Array<HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutCompletedByInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope;

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

    @Field(() => [HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutCompletedByInput)
    update?: Array<HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutCompletedByInput>;

    @Field(() => [HomeOpsTaskInstanceUpdateManyWithWhereWithoutCompletedByInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateManyWithWhereWithoutCompletedByInput)
    updateMany?: Array<HomeOpsTaskInstanceUpdateManyWithWhereWithoutCompletedByInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskInstanceScalarWhereInput>;
}
