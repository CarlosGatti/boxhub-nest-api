import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PricePointScalarWhereWithAggregatesInput {

    @Field(() => [PricePointScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PricePointScalarWhereWithAggregatesInput)
    AND?: Array<PricePointScalarWhereWithAggregatesInput>;

    @Field(() => [PricePointScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PricePointScalarWhereWithAggregatesInput)
    OR?: Array<PricePointScalarWhereWithAggregatesInput>;

    @Field(() => [PricePointScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PricePointScalarWhereWithAggregatesInput)
    NOT?: Array<PricePointScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    assetId?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    asOf?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    source?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
