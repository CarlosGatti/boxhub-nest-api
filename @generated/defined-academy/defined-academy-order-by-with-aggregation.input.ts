import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCountOrderByAggregateInput } from './defined-academy-count-order-by-aggregate.input';
import { DefinedAcademyAvgOrderByAggregateInput } from './defined-academy-avg-order-by-aggregate.input';
import { DefinedAcademyMaxOrderByAggregateInput } from './defined-academy-max-order-by-aggregate.input';
import { DefinedAcademyMinOrderByAggregateInput } from './defined-academy-min-order-by-aggregate.input';
import { DefinedAcademySumOrderByAggregateInput } from './defined-academy-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    appId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    logoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    settings?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    archivedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyCountOrderByAggregateInput;

    @Field(() => DefinedAcademyAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyMinOrderByAggregateInput;

    @Field(() => DefinedAcademySumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademySumOrderByAggregateInput;
}
