import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-without-home-ops-task-templates-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-or-connect-without-home-ops-task-templates-assigned.input';
import { UserUpsertWithoutHomeOpsTaskTemplatesAssignedInput } from './user-upsert-without-home-ops-task-templates-assigned.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesAssignedInput } from './user-update-to-one-with-where-without-home-ops-task-templates-assigned.input';

@InputType()
export class UserUpdateOneWithoutHomeOpsTaskTemplatesAssignedNestedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput)
    create?: UserCreateWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserUpsertWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsTaskTemplatesAssignedInput)
    upsert?: UserUpsertWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesAssignedInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesAssignedInput;
}
