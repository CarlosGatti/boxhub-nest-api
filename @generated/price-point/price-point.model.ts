import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Asset } from '../asset/asset.model';

@ObjectType()
export class PricePoint {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    asOf!: Date;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Asset, {nullable:false})
    asset?: Asset;
}
