import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketVisionGoalLinkScalarWhereWithAggregatesInput {

    @Field(() => [BucketVisionGoalLinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketVisionGoalLinkScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketVisionGoalLinkScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketVisionGoalLinkScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    boardId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    goalId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    label?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
