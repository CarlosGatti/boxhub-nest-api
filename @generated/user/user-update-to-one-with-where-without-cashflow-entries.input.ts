import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCashflowEntriesInput } from './user-update-without-cashflow-entries.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCashflowEntriesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCashflowEntriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCashflowEntriesInput)
    data!: UserUpdateWithoutCashflowEntriesInput;
}
