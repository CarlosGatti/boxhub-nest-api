import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutPortfolioInput } from './transaction-create-without-portfolio.input';

@InputType()
export class TransactionCreateOrConnectWithoutPortfolioInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionCreateWithoutPortfolioInput, {nullable:false})
    @Type(() => TransactionCreateWithoutPortfolioInput)
    create!: TransactionCreateWithoutPortfolioInput;
}
