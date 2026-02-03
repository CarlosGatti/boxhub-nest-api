import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-update-without-home-ops-task-templates-assigned.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-create-without-home-ops-task-templates-assigned.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsTaskTemplatesAssignedInput {

    @Field(() => UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput)
    update!: UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesAssignedInput)
    create!: UserCreateWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
