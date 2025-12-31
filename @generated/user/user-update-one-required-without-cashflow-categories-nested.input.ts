import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCashflowCategoriesInput } from './user-create-without-cashflow-categories.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCashflowCategoriesInput } from './user-create-or-connect-without-cashflow-categories.input';
import { UserUpsertWithoutCashflowCategoriesInput } from './user-upsert-without-cashflow-categories.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCashflowCategoriesInput } from './user-update-to-one-with-where-without-cashflow-categories.input';

@InputType()
export class UserUpdateOneRequiredWithoutCashflowCategoriesNestedInput {

    @Field(() => UserCreateWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserCreateWithoutCashflowCategoriesInput)
    create?: UserCreateWithoutCashflowCategoriesInput;

    @Field(() => UserCreateOrConnectWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCashflowCategoriesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCashflowCategoriesInput;

    @Field(() => UserUpsertWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserUpsertWithoutCashflowCategoriesInput)
    upsert?: UserUpsertWithoutCashflowCategoriesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCashflowCategoriesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCashflowCategoriesInput)
    update?: UserUpdateToOneWithWhereWithoutCashflowCategoriesInput;
}
