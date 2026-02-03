import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-without-home-ops-task-instances-completed.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput } from './user-create-or-connect-without-home-ops-task-instances-completed.input';
import { UserUpsertWithoutHomeOpsTaskInstancesCompletedInput } from './user-upsert-without-home-ops-task-instances-completed.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesCompletedInput } from './user-update-to-one-with-where-without-home-ops-task-instances-completed.input';

@InputType()
export class UserUpdateOneWithoutHomeOpsTaskInstancesCompletedNestedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesCompletedInput)
    create?: UserCreateWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserUpsertWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsTaskInstancesCompletedInput)
    upsert?: UserUpsertWithoutHomeOpsTaskInstancesCompletedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesCompletedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesCompletedInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsTaskInstancesCompletedInput;
}
