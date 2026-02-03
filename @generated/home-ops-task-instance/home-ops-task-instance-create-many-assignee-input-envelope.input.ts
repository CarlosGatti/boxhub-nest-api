import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyAssigneeInput } from './home-ops-task-instance-create-many-assignee.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceCreateManyAssigneeInputEnvelope {

    @Field(() => [HomeOpsTaskInstanceCreateManyAssigneeInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyAssigneeInput)
    data!: Array<HomeOpsTaskInstanceCreateManyAssigneeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
