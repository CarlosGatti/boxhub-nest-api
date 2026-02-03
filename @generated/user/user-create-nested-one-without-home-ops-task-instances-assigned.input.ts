import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-without-home-ops-task-instances-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-or-connect-without-home-ops-task-instances-assigned.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsTaskInstancesAssignedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput)
    create?: UserCreateWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
