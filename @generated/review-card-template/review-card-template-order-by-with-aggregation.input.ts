import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardTemplateCountOrderByAggregateInput } from './review-card-template-count-order-by-aggregate.input';
import { ReviewCardTemplateAvgOrderByAggregateInput } from './review-card-template-avg-order-by-aggregate.input';
import { ReviewCardTemplateMaxOrderByAggregateInput } from './review-card-template-max-order-by-aggregate.input';
import { ReviewCardTemplateMinOrderByAggregateInput } from './review-card-template-min-order-by-aggregate.input';
import { ReviewCardTemplateSumOrderByAggregateInput } from './review-card-template-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardTemplateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    aspect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schemaVersion?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    previewImageUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    defaultDesignJson?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    editableFieldsJson?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    constraintsJson?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardTemplateCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardTemplateCountOrderByAggregateInput;

    @Field(() => ReviewCardTemplateAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardTemplateAvgOrderByAggregateInput;

    @Field(() => ReviewCardTemplateMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardTemplateMaxOrderByAggregateInput;

    @Field(() => ReviewCardTemplateMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardTemplateMinOrderByAggregateInput;

    @Field(() => ReviewCardTemplateSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardTemplateSumOrderByAggregateInput;
}
