import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Portfolio } from '../portfolio/portfolio.model';
import { Asset } from '../asset/asset.model';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    portfolioId!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => TransactionType, {nullable:false})
    type!: keyof typeof TransactionType;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    fees!: Decimal | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    executedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Portfolio, {nullable:false})
    portfolio?: Portfolio;

    @Field(() => Asset, {nullable:false})
    asset?: Asset;
}
