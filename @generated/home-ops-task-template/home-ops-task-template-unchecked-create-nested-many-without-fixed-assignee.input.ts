import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput } from './home-ops-task-template-create-without-fixed-assignee.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput } from './home-ops-task-template-create-or-connect-without-fixed-assignee.input';
import { HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope } from './home-ops-task-template-create-many-fixed-assignee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutFixedAssigneeInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;
}
