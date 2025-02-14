import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PublicationCountOrderByAggregateInput } from './publication-count-order-by-aggregate.input';
import { PublicationAvgOrderByAggregateInput } from './publication-avg-order-by-aggregate.input';
import { PublicationMaxOrderByAggregateInput } from './publication-max-order-by-aggregate.input';
import { PublicationMinOrderByAggregateInput } from './publication-min-order-by-aggregate.input';
import { PublicationSumOrderByAggregateInput } from './publication-sum-order-by-aggregate.input';

@InputType()
export class PublicationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => PublicationCountOrderByAggregateInput, {nullable:true})
    _count?: PublicationCountOrderByAggregateInput;

    @Field(() => PublicationAvgOrderByAggregateInput, {nullable:true})
    _avg?: PublicationAvgOrderByAggregateInput;

    @Field(() => PublicationMaxOrderByAggregateInput, {nullable:true})
    _max?: PublicationMaxOrderByAggregateInput;

    @Field(() => PublicationMinOrderByAggregateInput, {nullable:true})
    _min?: PublicationMinOrderByAggregateInput;

    @Field(() => PublicationSumOrderByAggregateInput, {nullable:true})
    _sum?: PublicationSumOrderByAggregateInput;
}
