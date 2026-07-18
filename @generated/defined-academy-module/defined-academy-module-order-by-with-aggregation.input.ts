import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyModuleCountOrderByAggregateInput } from './defined-academy-module-count-order-by-aggregate.input';
import { DefinedAcademyModuleAvgOrderByAggregateInput } from './defined-academy-module-avg-order-by-aggregate.input';
import { DefinedAcademyModuleMaxOrderByAggregateInput } from './defined-academy-module-max-order-by-aggregate.input';
import { DefinedAcademyModuleMinOrderByAggregateInput } from './defined-academy-module-min-order-by-aggregate.input';
import { DefinedAcademyModuleSumOrderByAggregateInput } from './defined-academy-module-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyModuleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyModuleCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyModuleCountOrderByAggregateInput;

    @Field(() => DefinedAcademyModuleAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyModuleAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyModuleMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyModuleMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyModuleMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyModuleMinOrderByAggregateInput;

    @Field(() => DefinedAcademyModuleSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyModuleSumOrderByAggregateInput;
}
