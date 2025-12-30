import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetUnique_asset_tickerCompoundUniqueInput } from './asset-unique-asset-ticker-compound-unique.input';
import { AssetWhereInput } from './asset-where.input';
import { EnumAssetTypeFilter } from '../prisma/enum-asset-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HoldingListRelationFilter } from '../holding/holding-list-relation-filter.input';
import { Type } from 'class-transformer';
import { PricePointListRelationFilter } from '../price-point/price-point-list-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class AssetWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => AssetUnique_asset_tickerCompoundUniqueInput, {nullable:true})
    unique_asset_ticker?: AssetUnique_asset_tickerCompoundUniqueInput;

    @Field(() => [AssetWhereInput], {nullable:true})
    AND?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    OR?: Array<AssetWhereInput>;

    @Field(() => [AssetWhereInput], {nullable:true})
    NOT?: Array<AssetWhereInput>;

    @Field(() => EnumAssetTypeFilter, {nullable:true})
    type?: EnumAssetTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticker?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    exchange?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => HoldingListRelationFilter, {nullable:true})
    @Type(() => HoldingListRelationFilter)
    holdings?: HoldingListRelationFilter;

    @Field(() => PricePointListRelationFilter, {nullable:true})
    @Type(() => PricePointListRelationFilter)
    pricePoints?: PricePointListRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    @Type(() => TransactionListRelationFilter)
    transactions?: TransactionListRelationFilter;
}
