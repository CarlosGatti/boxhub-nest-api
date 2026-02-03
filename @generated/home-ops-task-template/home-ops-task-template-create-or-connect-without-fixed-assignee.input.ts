import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput } from './home-ops-task-template-create-without-fixed-assignee.input';

@InputType()
export class HomeOpsTaskTemplateCreateOrConnectWithoutFixedAssigneeInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput)
    create!: HomeOpsTaskTemplateCreateWithoutFixedAssigneeInput;
}
