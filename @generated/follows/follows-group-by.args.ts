import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsWhereInput } from './follows-where.input';
import { Type } from 'class-transformer';
import { FollowsOrderByWithAggregationInput } from './follows-order-by-with-aggregation.input';
import { FollowsScalarFieldEnum } from './follows-scalar-field.enum';
import { FollowsScalarWhereWithAggregatesInput } from './follows-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FollowsCountAggregateInput } from './follows-count-aggregate.input';
import { FollowsAvgAggregateInput } from './follows-avg-aggregate.input';
import { FollowsSumAggregateInput } from './follows-sum-aggregate.input';
import { FollowsMinAggregateInput } from './follows-min-aggregate.input';
import { FollowsMaxAggregateInput } from './follows-max-aggregate.input';

@ArgsType()
export class FollowsGroupByArgs {

    @Field(() => FollowsWhereInput, {nullable:true})
    @Type(() => FollowsWhereInput)
    where?: FollowsWhereInput;

    @Field(() => [FollowsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FollowsOrderByWithAggregationInput>;

    @Field(() => [FollowsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FollowsScalarFieldEnum>;

    @Field(() => FollowsScalarWhereWithAggregatesInput, {nullable:true})
    having?: FollowsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FollowsCountAggregateInput, {nullable:true})
    _count?: FollowsCountAggregateInput;

    @Field(() => FollowsAvgAggregateInput, {nullable:true})
    _avg?: FollowsAvgAggregateInput;

    @Field(() => FollowsSumAggregateInput, {nullable:true})
    _sum?: FollowsSumAggregateInput;

    @Field(() => FollowsMinAggregateInput, {nullable:true})
    _min?: FollowsMinAggregateInput;

    @Field(() => FollowsMaxAggregateInput, {nullable:true})
    _max?: FollowsMaxAggregateInput;
}
