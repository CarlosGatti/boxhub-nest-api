import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsTaskInstancesAssignedInput } from './user-update-without-home-ops-task-instances-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-without-home-ops-task-instances-assigned.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsTaskInstancesAssignedInput {

    @Field(() => UserUpdateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskInstancesAssignedInput)
    update!: UserUpdateWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput)
    create!: UserCreateWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
