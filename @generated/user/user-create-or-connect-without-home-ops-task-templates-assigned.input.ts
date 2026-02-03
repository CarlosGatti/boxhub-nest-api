import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-without-home-ops-task-templates-assigned.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsTaskTemplatesAssignedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput)
    create!: UserCreateWithoutHomeOpsTaskTemplatesAssignedInput;
}
