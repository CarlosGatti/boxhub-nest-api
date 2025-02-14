import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ThemeCountOrderByAggregateInput } from './theme-count-order-by-aggregate.input';
import { ThemeAvgOrderByAggregateInput } from './theme-avg-order-by-aggregate.input';
import { ThemeMaxOrderByAggregateInput } from './theme-max-order-by-aggregate.input';
import { ThemeMinOrderByAggregateInput } from './theme-min-order-by-aggregate.input';
import { ThemeSumOrderByAggregateInput } from './theme-sum-order-by-aggregate.input';

@InputType()
export class ThemeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    processId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ThemeCountOrderByAggregateInput, {nullable:true})
    _count?: ThemeCountOrderByAggregateInput;

    @Field(() => ThemeAvgOrderByAggregateInput, {nullable:true})
    _avg?: ThemeAvgOrderByAggregateInput;

    @Field(() => ThemeMaxOrderByAggregateInput, {nullable:true})
    _max?: ThemeMaxOrderByAggregateInput;

    @Field(() => ThemeMinOrderByAggregateInput, {nullable:true})
    _min?: ThemeMinOrderByAggregateInput;

    @Field(() => ThemeSumOrderByAggregateInput, {nullable:true})
    _sum?: ThemeSumOrderByAggregateInput;
}
