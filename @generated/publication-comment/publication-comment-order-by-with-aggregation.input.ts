import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PublicationCommentCountOrderByAggregateInput } from './publication-comment-count-order-by-aggregate.input';
import { PublicationCommentAvgOrderByAggregateInput } from './publication-comment-avg-order-by-aggregate.input';
import { PublicationCommentMaxOrderByAggregateInput } from './publication-comment-max-order-by-aggregate.input';
import { PublicationCommentMinOrderByAggregateInput } from './publication-comment-min-order-by-aggregate.input';
import { PublicationCommentSumOrderByAggregateInput } from './publication-comment-sum-order-by-aggregate.input';

@InputType()
export class PublicationCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publicationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PublicationCommentCountOrderByAggregateInput, {nullable:true})
    _count?: PublicationCommentCountOrderByAggregateInput;

    @Field(() => PublicationCommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: PublicationCommentAvgOrderByAggregateInput;

    @Field(() => PublicationCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: PublicationCommentMaxOrderByAggregateInput;

    @Field(() => PublicationCommentMinOrderByAggregateInput, {nullable:true})
    _min?: PublicationCommentMinOrderByAggregateInput;

    @Field(() => PublicationCommentSumOrderByAggregateInput, {nullable:true})
    _sum?: PublicationCommentSumOrderByAggregateInput;
}
