import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RatingScalarWhereWithAggregatesInput {

    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RatingScalarWhereWithAggregatesInput>;

    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RatingScalarWhereWithAggregatesInput>;

    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RatingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sellerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    buyerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stars?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    comment?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
