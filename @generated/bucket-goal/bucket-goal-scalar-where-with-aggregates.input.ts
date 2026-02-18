import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumBucketGoalTypeWithAggregatesFilter } from '../prisma/enum-bucket-goal-type-with-aggregates-filter.input';
import { EnumBucketGoalStatusWithAggregatesFilter } from '../prisma/enum-bucket-goal-status-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketGoalScalarWhereWithAggregatesInput {

    @Field(() => [BucketGoalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketGoalScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketGoalScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketGoalScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBucketGoalTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBucketGoalTypeWithAggregatesFilter;

    @Field(() => EnumBucketGoalStatusWithAggregatesFilter, {nullable:true})
    status?: EnumBucketGoalStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    priority?: IntWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    details?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    coverUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    targetDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    completedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
