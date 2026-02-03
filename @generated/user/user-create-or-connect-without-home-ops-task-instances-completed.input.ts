import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-without-home-ops-task-instances-completed.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput)
    create!: UserCreateWithoutHomeOpsTaskInstancesCompletedInput;
}
