import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsTaskInstancesCompletedInput } from './user-update-without-home-ops-task-instances-completed.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-without-home-ops-task-instances-completed.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsTaskInstancesCompletedInput {

    @Field(() => UserUpdateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskInstancesCompletedInput)
    update!: UserUpdateWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput)
    create!: UserCreateWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
