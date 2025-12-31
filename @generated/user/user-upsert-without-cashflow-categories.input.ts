import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCashflowCategoriesInput } from './user-update-without-cashflow-categories.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCashflowCategoriesInput } from './user-create-without-cashflow-categories.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCashflowCategoriesInput {

    @Field(() => UserUpdateWithoutCashflowCategoriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCashflowCategoriesInput)
    update!: UserUpdateWithoutCashflowCategoriesInput;

    @Field(() => UserCreateWithoutCashflowCategoriesInput, {nullable:false})
    @Type(() => UserCreateWithoutCashflowCategoriesInput)
    create!: UserCreateWithoutCashflowCategoriesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
