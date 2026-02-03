import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateManyMutationInput } from './home-ops-task-instance-update-many-mutation.input';

@InputType()
export class HomeOpsTaskInstanceUpdateManyWithWhereWithoutAssigneeInput {

    @Field(() => HomeOpsTaskInstanceScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    where!: HomeOpsTaskInstanceScalarWhereInput;

    @Field(() => HomeOpsTaskInstanceUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateManyMutationInput)
    data!: HomeOpsTaskInstanceUpdateManyMutationInput;
}
