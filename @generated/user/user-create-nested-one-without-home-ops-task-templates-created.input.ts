import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-without-home-ops-task-templates-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-or-connect-without-home-ops-task-templates-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsTaskTemplatesCreatedInput {

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput)
    create?: UserCreateWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
