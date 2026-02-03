import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-update-without-home-ops-task-templates-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-create-without-home-ops-task-templates-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsTaskTemplatesCreatedInput {

    @Field(() => UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput)
    update!: UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsTaskTemplatesCreatedInput)
    create!: UserCreateWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
