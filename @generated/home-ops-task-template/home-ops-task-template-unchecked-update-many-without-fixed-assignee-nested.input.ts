import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput } from './home-ops-task-template-create-without-fixed-assignee.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput } from './home-ops-task-template-create-or-connect-without-fixed-assignee.input';
import { HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutFixedAssigneeInput } from './home-ops-task-template-upsert-with-where-unique-without-fixed-assignee.input';
import { HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope } from './home-ops-task-template-create-many-fixed-assignee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutFixedAssigneeInput } from './home-ops-task-template-update-with-where-unique-without-fixed-assignee.input';
import { HomeOpsTaskTemplateUpdateManyWithWhereWithoutFixedAssigneeInput } from './home-ops-task-template-update-many-with-where-without-fixed-assignee.input';
import { HomeOpsTaskTemplateScalarWhereInput } from './home-ops-task-template-scalar-where.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedUpdateManyWithoutFixedAssigneeNestedInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput>;

    @Field(() => [HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutFixedAssigneeInput)
    upsert?: Array<HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutFixedAssigneeInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutFixedAssigneeInput)
    update?: Array<HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutFixedAssigneeInput>;

    @Field(() => [HomeOpsTaskTemplateUpdateManyWithWhereWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateManyWithWhereWithoutFixedAssigneeInput)
    updateMany?: Array<HomeOpsTaskTemplateUpdateManyWithWhereWithoutFixedAssigneeInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskTemplateScalarWhereInput>;
}
