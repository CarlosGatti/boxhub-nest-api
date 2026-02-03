import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput } from './user-update-without-home-ops-task-templates-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput)
    data!: UserUpdateWithoutHomeOpsTaskTemplatesCreatedInput;
}
