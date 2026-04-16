import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedInternalNoteCountOrderByAggregateInput } from './defined-internal-note-count-order-by-aggregate.input';
import { DefinedInternalNoteAvgOrderByAggregateInput } from './defined-internal-note-avg-order-by-aggregate.input';
import { DefinedInternalNoteMaxOrderByAggregateInput } from './defined-internal-note-max-order-by-aggregate.input';
import { DefinedInternalNoteMinOrderByAggregateInput } from './defined-internal-note-min-order-by-aggregate.input';
import { DefinedInternalNoteSumOrderByAggregateInput } from './defined-internal-note-sum-order-by-aggregate.input';

@InputType()
export class DefinedInternalNoteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    clientId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedInternalNoteCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedInternalNoteCountOrderByAggregateInput;

    @Field(() => DefinedInternalNoteAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedInternalNoteAvgOrderByAggregateInput;

    @Field(() => DefinedInternalNoteMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedInternalNoteMaxOrderByAggregateInput;

    @Field(() => DefinedInternalNoteMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedInternalNoteMinOrderByAggregateInput;

    @Field(() => DefinedInternalNoteSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedInternalNoteSumOrderByAggregateInput;
}
