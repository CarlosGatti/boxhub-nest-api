import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentWhereInput } from './publication-comment-where.input';
import { Type } from 'class-transformer';
import { PublicationCommentOrderByWithAggregationInput } from './publication-comment-order-by-with-aggregation.input';
import { PublicationCommentScalarFieldEnum } from './publication-comment-scalar-field.enum';
import { PublicationCommentScalarWhereWithAggregatesInput } from './publication-comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PublicationCommentCountAggregateInput } from './publication-comment-count-aggregate.input';
import { PublicationCommentAvgAggregateInput } from './publication-comment-avg-aggregate.input';
import { PublicationCommentSumAggregateInput } from './publication-comment-sum-aggregate.input';
import { PublicationCommentMinAggregateInput } from './publication-comment-min-aggregate.input';
import { PublicationCommentMaxAggregateInput } from './publication-comment-max-aggregate.input';

@ArgsType()
export class PublicationCommentGroupByArgs {

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    @Type(() => PublicationCommentWhereInput)
    where?: PublicationCommentWhereInput;

    @Field(() => [PublicationCommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PublicationCommentOrderByWithAggregationInput>;

    @Field(() => [PublicationCommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PublicationCommentScalarFieldEnum>;

    @Field(() => PublicationCommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: PublicationCommentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PublicationCommentCountAggregateInput, {nullable:true})
    _count?: PublicationCommentCountAggregateInput;

    @Field(() => PublicationCommentAvgAggregateInput, {nullable:true})
    _avg?: PublicationCommentAvgAggregateInput;

    @Field(() => PublicationCommentSumAggregateInput, {nullable:true})
    _sum?: PublicationCommentSumAggregateInput;

    @Field(() => PublicationCommentMinAggregateInput, {nullable:true})
    _min?: PublicationCommentMinAggregateInput;

    @Field(() => PublicationCommentMaxAggregateInput, {nullable:true})
    _max?: PublicationCommentMaxAggregateInput;
}
