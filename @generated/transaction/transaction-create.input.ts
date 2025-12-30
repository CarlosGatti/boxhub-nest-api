import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PortfolioCreateNestedOneWithoutTransactionsInput } from '../portfolio/portfolio-create-nested-one-without-transactions.input';
import { AssetCreateNestedOneWithoutTransactionsInput } from '../asset/asset-create-nested-one-without-transactions.input';

@InputType()
export class TransactionCreateInput {

    @Field(() => TransactionType, {nullable:false})
    type!: keyof typeof TransactionType;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    fees?: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    executedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PortfolioCreateNestedOneWithoutTransactionsInput, {nullable:false})
    @Type(() => PortfolioCreateNestedOneWithoutTransactionsInput)
    portfolio!: PortfolioCreateNestedOneWithoutTransactionsInput;

    @Field(() => AssetCreateNestedOneWithoutTransactionsInput, {nullable:false})
    @Type(() => AssetCreateNestedOneWithoutTransactionsInput)
    asset!: AssetCreateNestedOneWithoutTransactionsInput;
}
