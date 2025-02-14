import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PublicationLikeCountOrderByAggregateInput } from './publication-like-count-order-by-aggregate.input';
import { PublicationLikeAvgOrderByAggregateInput } from './publication-like-avg-order-by-aggregate.input';
import { PublicationLikeMaxOrderByAggregateInput } from './publication-like-max-order-by-aggregate.input';
import { PublicationLikeMinOrderByAggregateInput } from './publication-like-min-order-by-aggregate.input';
import { PublicationLikeSumOrderByAggregateInput } from './publication-like-sum-order-by-aggregate.input';

@InputType()
export class PublicationLikeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publicationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PublicationLikeCountOrderByAggregateInput, {nullable:true})
    _count?: PublicationLikeCountOrderByAggregateInput;

    @Field(() => PublicationLikeAvgOrderByAggregateInput, {nullable:true})
    _avg?: PublicationLikeAvgOrderByAggregateInput;

    @Field(() => PublicationLikeMaxOrderByAggregateInput, {nullable:true})
    _max?: PublicationLikeMaxOrderByAggregateInput;

    @Field(() => PublicationLikeMinOrderByAggregateInput, {nullable:true})
    _min?: PublicationLikeMinOrderByAggregateInput;

    @Field(() => PublicationLikeSumOrderByAggregateInput, {nullable:true})
    _sum?: PublicationLikeSumOrderByAggregateInput;
}
