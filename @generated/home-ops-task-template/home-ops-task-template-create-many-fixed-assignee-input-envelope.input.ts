import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateManyFixedAssigneeInput } from './home-ops-task-template-create-many-fixed-assignee.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskTemplateCreateManyFixedAssigneeInputEnvelope {

    @Field(() => [HomeOpsTaskTemplateCreateManyFixedAssigneeInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateManyFixedAssigneeInput)
    data!: Array<HomeOpsTaskTemplateCreateManyFixedAssigneeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
