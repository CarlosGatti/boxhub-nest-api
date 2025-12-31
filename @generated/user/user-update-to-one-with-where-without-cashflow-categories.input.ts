import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCashflowCategoriesInput } from './user-update-without-cashflow-categories.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCashflowCategoriesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCashflowCategoriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCashflowCategoriesInput)
    data!: UserUpdateWithoutCashflowCategoriesInput;
}
