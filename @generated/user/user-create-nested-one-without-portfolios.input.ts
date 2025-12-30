import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPortfoliosInput } from './user-create-without-portfolios.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPortfoliosInput } from './user-create-or-connect-without-portfolios.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPortfoliosInput {

    @Field(() => UserCreateWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserCreateWithoutPortfoliosInput)
    create?: UserCreateWithoutPortfoliosInput;

    @Field(() => UserCreateOrConnectWithoutPortfoliosInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPortfoliosInput)
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
