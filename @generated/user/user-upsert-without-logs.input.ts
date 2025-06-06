import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLogsInput } from './user-update-without-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogsInput } from './user-create-without-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLogsInput {

    @Field(() => UserUpdateWithoutLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogsInput)
    update!: UserUpdateWithoutLogsInput;

    @Field(() => UserCreateWithoutLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutLogsInput)
    create!: UserCreateWithoutLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
