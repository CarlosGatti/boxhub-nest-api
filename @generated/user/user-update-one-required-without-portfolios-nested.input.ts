import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPortfoliosInput } from './user-create-without-portfolios.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPortfoliosInput } from './user-create-or-connect-without-portfolios.input';
import { UserUpsertWithoutPortfoliosInput } from './user-upsert-without-portfolios.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPortfoliosInput } from './user-update-to-one-with-where-without-portfolios.input';

@InputType()
export class UserUpdateOneRequiredWithoutPortfoliosNestedInput {

    @Field(() => UserCreateWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserCreateWithoutPortfoliosInput)
    create?: UserCreateWithoutPortfoliosInput;

    @Field(() => UserCreateOrConnectWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPortfoliosInput)
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput;

    @Field(() => UserUpsertWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserUpsertWithoutPortfoliosInput)
    upsert?: UserUpsertWithoutPortfoliosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPortfoliosInput)
    update?: UserUpdateToOneWithWhereWithoutPortfoliosInput;
}
