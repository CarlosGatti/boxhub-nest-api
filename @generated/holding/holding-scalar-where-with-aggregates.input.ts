import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HoldingScalarWhereWithAggregatesInput {

    @Field(() => [HoldingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => HoldingScalarWhereWithAggregatesInput)
    AND?: Array<HoldingScalarWhereWithAggregatesInput>;

    @Field(() => [HoldingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => HoldingScalarWhereWithAggregatesInput)
    OR?: Array<HoldingScalarWhereWithAggregatesInput>;

    @Field(() => [HoldingScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => HoldingScalarWhereWithAggregatesInput)
    NOT?: Array<HoldingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    portfolioId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    assetId?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    quantity?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    averageCost?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
