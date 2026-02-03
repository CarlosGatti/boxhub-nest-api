import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput } from './user-update-without-home-ops-task-templates-assigned.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsTaskTemplatesAssignedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput)
    data!: UserUpdateWithoutHomeOpsTaskTemplatesAssignedInput;
}
