import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class FacetScalarWhereWithAggregatesInput {

    @Field(() => [FacetScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FacetScalarWhereWithAggregatesInput>;

    @Field(() => [FacetScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FacetScalarWhereWithAggregatesInput>;

    @Field(() => [FacetScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FacetScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    communityId?: IntNullableWithAggregatesFilter;
}
