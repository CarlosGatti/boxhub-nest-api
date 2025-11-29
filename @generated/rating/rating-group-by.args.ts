import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingWhereInput } from './rating-where.input';
import { Type } from 'class-transformer';
import { RatingOrderByWithAggregationInput } from './rating-order-by-with-aggregation.input';
import { RatingScalarFieldEnum } from './rating-scalar-field.enum';
import { RatingScalarWhereWithAggregatesInput } from './rating-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RatingCountAggregateInput } from './rating-count-aggregate.input';
import { RatingAvgAggregateInput } from './rating-avg-aggregate.input';
import { RatingSumAggregateInput } from './rating-sum-aggregate.input';
import { RatingMinAggregateInput } from './rating-min-aggregate.input';
import { RatingMaxAggregateInput } from './rating-max-aggregate.input';

@ArgsType()
export class RatingGroupByArgs {

    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: RatingWhereInput;

    @Field(() => [RatingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithAggregationInput>;

    @Field(() => [RatingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RatingScalarFieldEnum>;

    @Field(() => RatingScalarWhereWithAggregatesInput, {nullable:true})
    having?: RatingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: RatingCountAggregateInput;

    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: RatingAvgAggregateInput;

    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: RatingSumAggregateInput;

    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: RatingMinAggregateInput;

    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: RatingMaxAggregateInput;
}
