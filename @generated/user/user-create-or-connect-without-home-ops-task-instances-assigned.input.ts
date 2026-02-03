import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskInstancesAssignedInput } from './user-create-without-home-ops-task-instances-assigned.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsTaskInstancesAssignedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskInstancesAssignedInput)
    create!: UserCreateWithoutHomeOpsTaskInstancesAssignedInput;
}
