import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioUpdateWithoutTransactionsInput } from './portfolio-update-without-transactions.input';
import { Type } from 'class-transformer';
import { PortfolioCreateWithoutTransactionsInput } from './portfolio-create-without-transactions.input';
import { PortfolioWhereInput } from './portfolio-where.input';

@InputType()
export class PortfolioUpsertWithoutTransactionsInput {

    @Field(() => PortfolioUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => PortfolioUpdateWithoutTransactionsInput)
    update!: PortfolioUpdateWithoutTransactionsInput;

    @Field(() => PortfolioCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => PortfolioCreateWithoutTransactionsInput)
    create!: PortfolioCreateWithoutTransactionsInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;
}
