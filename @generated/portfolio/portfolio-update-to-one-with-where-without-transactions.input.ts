import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { Type } from 'class-transformer';
import { PortfolioUpdateWithoutTransactionsInput } from './portfolio-update-without-transactions.input';

@InputType()
export class PortfolioUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;

    @Field(() => PortfolioUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => PortfolioUpdateWithoutTransactionsInput)
    data!: PortfolioUpdateWithoutTransactionsInput;
}
