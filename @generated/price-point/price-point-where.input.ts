import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AssetRelationFilter } from '../asset/asset-relation-filter.input';

@InputType()
export class PricePointWhereInput {

    @Field(() => [PricePointWhereInput], {nullable:true})
    @Type(() => PricePointWhereInput)
    AND?: Array<PricePointWhereInput>;

    @Field(() => [PricePointWhereInput], {nullable:true})
    @Type(() => PricePointWhereInput)
    OR?: Array<PricePointWhereInput>;

    @Field(() => [PricePointWhereInput], {nullable:true})
    @Type(() => PricePointWhereInput)
    NOT?: Array<PricePointWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    assetId?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    asOf?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    source?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AssetRelationFilter, {nullable:true})
    @Type(() => AssetRelationFilter)
    asset?: AssetRelationFilter;
}
