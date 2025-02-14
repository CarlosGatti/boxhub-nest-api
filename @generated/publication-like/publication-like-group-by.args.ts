import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';
import { Type } from 'class-transformer';
import { PublicationLikeOrderByWithAggregationInput } from './publication-like-order-by-with-aggregation.input';
import { PublicationLikeScalarFieldEnum } from './publication-like-scalar-field.enum';
import { PublicationLikeScalarWhereWithAggregatesInput } from './publication-like-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PublicationLikeCountAggregateInput } from './publication-like-count-aggregate.input';
import { PublicationLikeAvgAggregateInput } from './publication-like-avg-aggregate.input';
import { PublicationLikeSumAggregateInput } from './publication-like-sum-aggregate.input';
import { PublicationLikeMinAggregateInput } from './publication-like-min-aggregate.input';
import { PublicationLikeMaxAggregateInput } from './publication-like-max-aggregate.input';

@ArgsType()
export class PublicationLikeGroupByArgs {

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    @Type(() => PublicationLikeWhereInput)
    where?: PublicationLikeWhereInput;

    @Field(() => [PublicationLikeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PublicationLikeOrderByWithAggregationInput>;

    @Field(() => [PublicationLikeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PublicationLikeScalarFieldEnum>;

    @Field(() => PublicationLikeScalarWhereWithAggregatesInput, {nullable:true})
    having?: PublicationLikeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PublicationLikeCountAggregateInput, {nullable:true})
    _count?: PublicationLikeCountAggregateInput;

    @Field(() => PublicationLikeAvgAggregateInput, {nullable:true})
    _avg?: PublicationLikeAvgAggregateInput;

    @Field(() => PublicationLikeSumAggregateInput, {nullable:true})
    _sum?: PublicationLikeSumAggregateInput;

    @Field(() => PublicationLikeMinAggregateInput, {nullable:true})
    _min?: PublicationLikeMinAggregateInput;

    @Field(() => PublicationLikeMaxAggregateInput, {nullable:true})
    _max?: PublicationLikeMaxAggregateInput;
}
