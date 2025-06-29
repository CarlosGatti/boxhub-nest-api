import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutConstructionLogsInput } from './user-update-without-construction-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutConstructionLogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutConstructionLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutConstructionLogsInput)
    data!: UserUpdateWithoutConstructionLogsInput;
}
