import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumTransactionTypeFilter } from '../prisma/enum-transaction-type-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PortfolioRelationFilter } from '../portfolio/portfolio-relation-filter.input';
import { AssetRelationFilter } from '../asset/asset-relation-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    @Type(() => TransactionWhereInput)
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    @Type(() => TransactionWhereInput)
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    @Type(() => TransactionWhereInput)
    NOT?: Array<TransactionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    portfolioId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    assetId?: IntFilter;

    @Field(() => EnumTransactionTypeFilter, {nullable:true})
    type?: EnumTransactionTypeFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    fees?: DecimalNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    executedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PortfolioRelationFilter, {nullable:true})
    @Type(() => PortfolioRelationFilter)
    portfolio?: PortfolioRelationFilter;

    @Field(() => AssetRelationFilter, {nullable:true})
    @Type(() => AssetRelationFilter)
    asset?: AssetRelationFilter;
}
