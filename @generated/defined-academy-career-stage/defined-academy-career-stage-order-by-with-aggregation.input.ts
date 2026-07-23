import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCareerStageCountOrderByAggregateInput } from './defined-academy-career-stage-count-order-by-aggregate.input';
import { DefinedAcademyCareerStageAvgOrderByAggregateInput } from './defined-academy-career-stage-avg-order-by-aggregate.input';
import { DefinedAcademyCareerStageMaxOrderByAggregateInput } from './defined-academy-career-stage-max-order-by-aggregate.input';
import { DefinedAcademyCareerStageMinOrderByAggregateInput } from './defined-academy-career-stage-min-order-by-aggregate.input';
import { DefinedAcademyCareerStageSumOrderByAggregateInput } from './defined-academy-career-stage-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyCareerStageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    iconKey?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCareerStageCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerStageCountOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerStageAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerStageMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerStageMinOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerStageSumOrderByAggregateInput;
}
