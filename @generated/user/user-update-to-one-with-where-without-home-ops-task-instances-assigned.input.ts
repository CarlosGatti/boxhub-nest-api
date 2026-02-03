import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsTaskInstancesAssignedInput } from './user-update-without-home-ops-task-instances-assigned.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesAssignedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskInstancesAssignedInput)
    data!: UserUpdateWithoutHomeOpsTaskInstancesAssignedInput;
}
