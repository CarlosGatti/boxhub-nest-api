import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCareerStageContentCountOrderByAggregateInput } from './defined-academy-career-stage-content-count-order-by-aggregate.input';
import { DefinedAcademyCareerStageContentAvgOrderByAggregateInput } from './defined-academy-career-stage-content-avg-order-by-aggregate.input';
import { DefinedAcademyCareerStageContentMaxOrderByAggregateInput } from './defined-academy-career-stage-content-max-order-by-aggregate.input';
import { DefinedAcademyCareerStageContentMinOrderByAggregateInput } from './defined-academy-career-stage-content-min-order-by-aggregate.input';
import { DefinedAcademyCareerStageContentSumOrderByAggregateInput } from './defined-academy-career-stage-content-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyCareerStageContentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    courseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resourceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCareerStageContentCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerStageContentCountOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerStageContentAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerStageContentMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerStageContentMinOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerStageContentSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerStageContentSumOrderByAggregateInput;
}
