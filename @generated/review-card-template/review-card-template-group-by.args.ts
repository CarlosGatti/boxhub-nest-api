import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateOrderByWithAggregationInput } from './review-card-template-order-by-with-aggregation.input';
import { ReviewCardTemplateScalarFieldEnum } from './review-card-template-scalar-field.enum';
import { ReviewCardTemplateScalarWhereWithAggregatesInput } from './review-card-template-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardTemplateCountAggregateInput } from './review-card-template-count-aggregate.input';
import { ReviewCardTemplateAvgAggregateInput } from './review-card-template-avg-aggregate.input';
import { ReviewCardTemplateSumAggregateInput } from './review-card-template-sum-aggregate.input';
import { ReviewCardTemplateMinAggregateInput } from './review-card-template-min-aggregate.input';
import { ReviewCardTemplateMaxAggregateInput } from './review-card-template-max-aggregate.input';

@ArgsType()
export class ReviewCardTemplateGroupByArgs {

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;

    @Field(() => [ReviewCardTemplateOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardTemplateOrderByWithAggregationInput>;

    @Field(() => [ReviewCardTemplateScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardTemplateScalarFieldEnum>;

    @Field(() => ReviewCardTemplateScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardTemplateScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardTemplateCountAggregateInput, {nullable:true})
    _count?: ReviewCardTemplateCountAggregateInput;

    @Field(() => ReviewCardTemplateAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardTemplateAvgAggregateInput;

    @Field(() => ReviewCardTemplateSumAggregateInput, {nullable:true})
    _sum?: ReviewCardTemplateSumAggregateInput;

    @Field(() => ReviewCardTemplateMinAggregateInput, {nullable:true})
    _min?: ReviewCardTemplateMinAggregateInput;

    @Field(() => ReviewCardTemplateMaxAggregateInput, {nullable:true})
    _max?: ReviewCardTemplateMaxAggregateInput;
}
