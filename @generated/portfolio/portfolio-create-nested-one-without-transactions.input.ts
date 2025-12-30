import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateWithoutTransactionsInput } from './portfolio-create-without-transactions.input';
import { Type } from 'class-transformer';
import { PortfolioCreateOrConnectWithoutTransactionsInput } from './portfolio-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';

@InputType()
export class PortfolioCreateNestedOneWithoutTransactionsInput {

    @Field(() => PortfolioCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioCreateWithoutTransactionsInput)
    create?: PortfolioCreateWithoutTransactionsInput;

    @Field(() => PortfolioCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: PortfolioCreateOrConnectWithoutTransactionsInput;

    @Field(() => PortfolioWhereUniqueInput, {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    connect?: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;
}
