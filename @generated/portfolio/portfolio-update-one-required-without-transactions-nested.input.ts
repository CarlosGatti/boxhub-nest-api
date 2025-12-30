import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateWithoutTransactionsInput } from './portfolio-create-without-transactions.input';
import { Type } from 'class-transformer';
import { PortfolioCreateOrConnectWithoutTransactionsInput } from './portfolio-create-or-connect-without-transactions.input';
import { PortfolioUpsertWithoutTransactionsInput } from './portfolio-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { PortfolioUpdateToOneWithWhereWithoutTransactionsInput } from './portfolio-update-to-one-with-where-without-transactions.input';

@InputType()
export class PortfolioUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => PortfolioCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioCreateWithoutTransactionsInput)
    create?: PortfolioCreateWithoutTransactionsInput;

    @Field(() => PortfolioCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: PortfolioCreateOrConnectWithoutTransactionsInput;

    @Field(() => PortfolioUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioUpsertWithoutTransactionsInput)
    upsert?: PortfolioUpsertWithoutTransactionsInput;

    @Field(() => PortfolioWhereUniqueInput, {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    connect?: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => PortfolioUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => PortfolioUpdateToOneWithWhereWithoutTransactionsInput)
    update?: PortfolioUpdateToOneWithWhereWithoutTransactionsInput;
}
