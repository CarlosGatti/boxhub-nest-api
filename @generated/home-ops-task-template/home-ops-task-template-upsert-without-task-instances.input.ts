import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput } from './home-ops-task-template-update-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutTaskInstancesInput } from './home-ops-task-template-create-without-task-instances.input';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';

@InputType()
export class HomeOpsTaskTemplateUpsertWithoutTaskInstancesInput {

    @Field(() => HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput)
    update!: HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput)
    create!: HomeOpsTaskTemplateCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;
}
