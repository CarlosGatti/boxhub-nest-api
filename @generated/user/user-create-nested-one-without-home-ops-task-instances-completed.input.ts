import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-without-home-ops-task-instances-completed.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-or-connect-without-home-ops-task-instances-completed.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsTaskInstancesCompletedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput)
    create?: UserCreateWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
