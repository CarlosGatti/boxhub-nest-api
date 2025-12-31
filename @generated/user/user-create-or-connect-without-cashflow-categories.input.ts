import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCashflowCategoriesInput } from './user-create-without-cashflow-categories.input';

@InputType()
export class UserCreateOrConnectWithoutCashflowCategoriesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCashflowCategoriesInput, {nullable:false})
    @Type(() => UserCreateWithoutCashflowCategoriesInput)
    create!: UserCreateWithoutCashflowCategoriesInput;
}
