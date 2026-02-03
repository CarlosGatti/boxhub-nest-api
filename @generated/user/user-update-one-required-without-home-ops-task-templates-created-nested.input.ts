import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-without-home-ops-task-templates-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-or-connect-without-home-ops-task-templates-created.input';
import { UserUpsertWithoutHomeOpsTaskTemplatesCreatedInput } from './user-upsert-without-home-ops-task-templates-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesCreatedInput } from './user-update-to-one-with-where-without-home-ops-task-templates-created.input';

@InputType()
export class UserUpdateOneRequiredWithoutHomeOpsTaskTemplatesCreatedNestedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput)
    create?: UserCreateWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserUpsertWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsTaskTemplatesCreatedInput)
    upsert?: UserUpsertWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesCreatedInput;
}
