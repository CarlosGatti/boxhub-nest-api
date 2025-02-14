import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FollowsScalarWhereWithAggregatesInput {

    @Field(() => [FollowsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FollowsScalarWhereWithAggregatesInput>;

    @Field(() => [FollowsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FollowsScalarWhereWithAggregatesInput>;

    @Field(() => [FollowsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FollowsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    followerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    followingId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
