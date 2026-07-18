import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyResourceCountOrderByAggregateInput } from './defined-academy-resource-count-order-by-aggregate.input';
import { DefinedAcademyResourceAvgOrderByAggregateInput } from './defined-academy-resource-avg-order-by-aggregate.input';
import { DefinedAcademyResourceMaxOrderByAggregateInput } from './defined-academy-resource-max-order-by-aggregate.input';
import { DefinedAcademyResourceMinOrderByAggregateInput } from './defined-academy-resource-min-order-by-aggregate.input';
import { DefinedAcademyResourceSumOrderByAggregateInput } from './defined-academy-resource-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyResourceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lessonId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fileUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    externalUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    textContent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mimeType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fileSize?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    downloadable?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyResourceCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyResourceCountOrderByAggregateInput;

    @Field(() => DefinedAcademyResourceAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyResourceAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyResourceMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyResourceMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyResourceMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyResourceMinOrderByAggregateInput;

    @Field(() => DefinedAcademyResourceSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyResourceSumOrderByAggregateInput;
}
