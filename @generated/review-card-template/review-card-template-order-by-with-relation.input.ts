import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardProjectOrderByRelationAggregateInput } from '../review-card-project/review-card-project-order-by-relation-aggregate.input';

@InputType()
export class ReviewCardTemplateOrderByWithRelationInput {

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

    @Field(() => ReviewCardProjectOrderByRelationAggregateInput, {nullable:true})
    projects?: ReviewCardProjectOrderByRelationAggregateInput;
}
