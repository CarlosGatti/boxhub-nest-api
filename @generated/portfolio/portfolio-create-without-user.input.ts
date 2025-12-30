import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateNestedManyWithoutPortfolioInput } from '../holding/holding-create-nested-many-without-portfolio.input';
import { Type } from 'class-transformer';
import { TransactionCreateNestedManyWithoutPortfolioInput } from '../transaction/transaction-create-nested-many-without-portfolio.input';

@InputType()
export class PortfolioCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    baseCurrency?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HoldingCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => HoldingCreateNestedManyWithoutPortfolioInput)
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput;

    @Field(() => TransactionCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => TransactionCreateNestedManyWithoutPortfolioInput)
    transactions?: TransactionCreateNestedManyWithoutPortfolioInput;
}
