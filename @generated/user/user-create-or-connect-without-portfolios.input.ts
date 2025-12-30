import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPortfoliosInput } from './user-create-without-portfolios.input';

@InputType()
export class UserCreateOrConnectWithoutPortfoliosInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPortfoliosInput, {nullable:false})
    @Type(() => UserCreateWithoutPortfoliosInput)
    create!: UserCreateWithoutPortfoliosInput;
}
