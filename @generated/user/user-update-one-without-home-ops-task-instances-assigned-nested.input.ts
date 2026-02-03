import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-without-home-ops-task-instances-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-or-connect-without-home-ops-task-instances-assigned.input';
import { UserUpsertWithoutHomeOpsTaskInstancesAssignedInput } from './user-upsert-without-home-ops-task-instances-assigned.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesAssignedInput } from './user-update-to-one-with-where-without-home-ops-task-instances-assigned.input';

@InputType()
export class UserUpdateOneWithoutHomeOpsTaskInstancesAssignedNestedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput)
    create?: UserCreateWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserUpsertWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsTaskInstancesAssignedInput)
    upsert?: UserUpsertWithoutHomeOpsTaskInstancesAssignedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesAssignedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesAssignedInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesAssignedInput;
}
