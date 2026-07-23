import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyUserCareerStageCompletionCountOrderByAggregateInput } from './defined-academy-user-career-stage-completion-count-order-by-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionAvgOrderByAggregateInput } from './defined-academy-user-career-stage-completion-avg-order-by-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMaxOrderByAggregateInput } from './defined-academy-user-career-stage-completion-max-order-by-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionMinOrderByAggregateInput } from './defined-academy-user-career-stage-completion-min-order-by-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionSumOrderByAggregateInput } from './defined-academy-user-career-stage-completion-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyUserCareerStageCompletionCountOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyUserCareerStageCompletionAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyUserCareerStageCompletionMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyUserCareerStageCompletionMinOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyUserCareerStageCompletionSumOrderByAggregateInput;
}
