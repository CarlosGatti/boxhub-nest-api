import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectOrderByWithAggregationInput } from './review-card-project-order-by-with-aggregation.input';
import { ReviewCardProjectScalarFieldEnum } from './review-card-project-scalar-field.enum';
import { ReviewCardProjectScalarWhereWithAggregatesInput } from './review-card-project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectCountAggregateInput } from './review-card-project-count-aggregate.input';
import { ReviewCardProjectAvgAggregateInput } from './review-card-project-avg-aggregate.input';
import { ReviewCardProjectSumAggregateInput } from './review-card-project-sum-aggregate.input';
import { ReviewCardProjectMinAggregateInput } from './review-card-project-min-aggregate.input';
import { ReviewCardProjectMaxAggregateInput } from './review-card-project-max-aggregate.input';

@ArgsType()
export class ReviewCardProjectGroupByArgs {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => [ReviewCardProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardProjectOrderByWithAggregationInput>;

    @Field(() => [ReviewCardProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardProjectScalarFieldEnum>;

    @Field(() => ReviewCardProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardProjectScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardProjectCountAggregateInput, {nullable:true})
    _count?: ReviewCardProjectCountAggregateInput;

    @Field(() => ReviewCardProjectAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardProjectAvgAggregateInput;

    @Field(() => ReviewCardProjectSumAggregateInput, {nullable:true})
    _sum?: ReviewCardProjectSumAggregateInput;

    @Field(() => ReviewCardProjectMinAggregateInput, {nullable:true})
    _min?: ReviewCardProjectMinAggregateInput;

    @Field(() => ReviewCardProjectMaxAggregateInput, {nullable:true})
    _max?: ReviewCardProjectMaxAggregateInput;
}
