import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutConstructionLogsInput } from './user-update-without-construction-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutConstructionLogsInput {

    @Field(() => UserUpdateWithoutConstructionLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutConstructionLogsInput)
    update!: UserUpdateWithoutConstructionLogsInput;

    @Field(() => UserCreateWithoutConstructionLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutConstructionLogsInput)
    create!: UserCreateWithoutConstructionLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
