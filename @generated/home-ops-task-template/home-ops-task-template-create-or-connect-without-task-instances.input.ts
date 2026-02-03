import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutTaskInstancesInput } from './home-ops-task-template-create-without-task-instances.input';

@InputType()
export class HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput)
    create!: HomeOpsTaskTemplateCreateWithoutTaskInstancesInput;
}
