import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCashflowCategoriesInput } from './user-create-without-cashflow-categories.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCashflowCategoriesInput } from './user-create-or-connect-without-cashflow-categories.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCashflowCategoriesInput {

    @Field(() => UserCreateWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserCreateWithoutCashflowCategoriesInput)
    create?: UserCreateWithoutCashflowCategoriesInput;

    @Field(() => UserCreateOrConnectWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCashflowCategoriesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCashflowCategoriesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
