import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsTaskInstancesCompletedInput } from './user-update-without-home-ops-task-instances-completed.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesCompletedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskInstancesCompletedInput)
    data!: UserUpdateWithoutHomeOpsTaskInstancesCompletedInput;
}
