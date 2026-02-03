import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-without-home-ops-task-templates-created.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsTaskTemplatesCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput)
    create!: UserCreateWithoutHomeOpsTaskTemplatesCreatedInput;
}
