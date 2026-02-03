import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyCompletedByInput } from './home-ops-task-instance-create-many-completed-by.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceCreateManyCompletedByInputEnvelope {

    @Field(() => [HomeOpsTaskInstanceCreateManyCompletedByInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyCompletedByInput)
    data!: Array<HomeOpsTaskInstanceCreateManyCompletedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
