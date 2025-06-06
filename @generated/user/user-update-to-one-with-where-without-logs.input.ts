import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLogsInput } from './user-update-without-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogsInput)
    data!: UserUpdateWithoutLogsInput;
}
