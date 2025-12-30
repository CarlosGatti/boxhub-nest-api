import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HoldingUncheckedCreateNestedManyWithoutPortfolioInput } from '../holding/holding-unchecked-create-nested-many-without-portfolio.input';
import { Type } from 'class-transformer';

@InputType()
export class PortfolioUncheckedCreateWithoutTransactionsInput {

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

    @Field(() => HoldingUncheckedCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => HoldingUncheckedCreateNestedManyWithoutPortfolioInput)
    holdings?: HoldingUncheckedCreateNestedManyWithoutPortfolioInput;
}
