import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutFixedAssigneeInput } from './home-ops-task-template-update-without-fixed-assignee.input';
import { HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput } from './home-ops-task-template-create-without-fixed-assignee.input';

@InputType()
export class HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutFixedAssigneeInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutFixedAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutFixedAssigneeInput)
    update!: HomeOpsTaskTemplateUpdateWithoutFixedAssigneeInput;

    @Field(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput)
    create!: HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput;
}
