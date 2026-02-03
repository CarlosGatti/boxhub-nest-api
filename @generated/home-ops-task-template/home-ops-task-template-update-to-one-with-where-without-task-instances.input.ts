import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput } from './home-ops-task-template-update-without-task-instances.input';

@InputType()
export class HomeOpsTaskTemplateUpdateToOneWithWhereWithoutTaskInstancesInput {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput)
    data!: HomeOpsTaskTemplateUpdateWithoutTaskInstancesInput;
}
