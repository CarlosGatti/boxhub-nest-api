import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Holding } from '../holding/holding.model';
import { PricePoint } from '../price-point/price-point.model';
import { Transaction } from '../transaction/transaction.model';
import { AssetCount } from './asset-count.output';

@ObjectType()
export class Asset {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => AssetType, {nullable:false})
    type!: keyof typeof AssetType;

    @Field(() => String, {nullable:true})
    ticker!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false,defaultValue:'USD'})
    currency!: string;

    @Field(() => String, {nullable:true})
    exchange!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Holding], {nullable:true})
    holdings?: Array<Holding>;

    @Field(() => [PricePoint], {nullable:true})
    pricePoints?: Array<PricePoint>;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => AssetCount, {nullable:false})
    _count?: AssetCount;
}
