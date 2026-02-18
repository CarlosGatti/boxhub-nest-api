import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketGoalLogScalarWhereWithAggregatesInput {

    @Field(() => [BucketGoalLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketGoalLogScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketGoalLogScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketGoalLogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    goalId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    note?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    happenedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
