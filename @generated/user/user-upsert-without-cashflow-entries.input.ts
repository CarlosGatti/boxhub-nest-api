import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCashflowEntriesInput } from './user-update-without-cashflow-entries.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCashflowEntriesInput } from './user-create-without-cashflow-entries.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCashflowEntriesInput {

    @Field(() => UserUpdateWithoutCashflowEntriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCashflowEntriesInput)
    update!: UserUpdateWithoutCashflowEntriesInput;

    @Field(() => UserCreateWithoutCashflowEntriesInput, {nullable:false})
    @Type(() => UserCreateWithoutCashflowEntriesInput)
    create!: UserCreateWithoutCashflowEntriesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
