import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class FacetValueScalarWhereWithAggregatesInput {

    @Field(() => [FacetValueScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FacetValueScalarWhereWithAggregatesInput>;

    @Field(() => [FacetValueScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FacetValueScalarWhereWithAggregatesInput>;

    @Field(() => [FacetValueScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FacetValueScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    facetId?: IntNullableWithAggregatesFilter;
}
