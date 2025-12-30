import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyPortfolioInput } from './transaction-create-many-portfolio.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyPortfolioInputEnvelope {

    @Field(() => [TransactionCreateManyPortfolioInput], {nullable:false})
    @Type(() => TransactionCreateManyPortfolioInput)
    data!: Array<TransactionCreateManyPortfolioInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
