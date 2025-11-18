import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDiscartItemTypeWithAggregatesFilter } from '../prisma/enum-discart-item-type-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumDiscartItemConditionWithAggregatesFilter } from '../prisma/enum-discart-item-condition-with-aggregates-filter.input';
import { EnumDiscartItemStatusWithAggregatesFilter } from '../prisma/enum-discart-item-status-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DiscartItemScalarWhereWithAggregatesInput {

    @Field(() => [DiscartItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DiscartItemScalarWhereWithAggregatesInput>;

    @Field(() => [DiscartItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DiscartItemScalarWhereWithAggregatesInput>;

    @Field(() => [DiscartItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DiscartItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumDiscartItemTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDiscartItemTypeWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    price?: FloatNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => EnumDiscartItemConditionWithAggregatesFilter, {nullable:true})
    condition?: EnumDiscartItemConditionWithAggregatesFilter;

    @Field(() => EnumDiscartItemStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDiscartItemStatusWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    imageUrls?: StringNullableListFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    pickupAddress?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    contactPhone?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    createdById?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
