import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionUncheckedCreateNestedManyWithoutPortfolioInput } from '../transaction/transaction-unchecked-create-nested-many-without-portfolio.input';
import { Type } from 'class-transformer';

@InputType()
export class PortfolioUncheckedCreateWithoutHoldingsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    baseCurrency?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => TransactionUncheckedCreateNestedManyWithoutPortfolioInput)
    transactions?: TransactionUncheckedCreateNestedManyWithoutPortfolioInput;
}
