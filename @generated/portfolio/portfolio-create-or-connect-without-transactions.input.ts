import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Type } from 'class-transformer';
import { PortfolioCreateWithoutTransactionsInput } from './portfolio-create-without-transactions.input';

@InputType()
export class PortfolioCreateOrConnectWithoutTransactionsInput {

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => PortfolioCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => PortfolioCreateWithoutTransactionsInput)
    create!: PortfolioCreateWithoutTransactionsInput;
}
