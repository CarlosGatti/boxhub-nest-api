import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-without-home-ops-task-templates-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-or-connect-without-home-ops-task-templates-assigned.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsTaskTemplatesAssignedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput)
    create?: UserCreateWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
