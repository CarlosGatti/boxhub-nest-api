import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Portfolio } from '../portfolio/portfolio.model';
import { Asset } from '../asset/asset.model';

@ObjectType()
export class Holding {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    portfolioId!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    averageCost!: Decimal;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Portfolio, {nullable:false})
    portfolio?: Portfolio;

    @Field(() => Asset, {nullable:false})
    asset?: Asset;
}
