import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedIntakeAnswerCountOrderByAggregateInput } from './defined-intake-answer-count-order-by-aggregate.input';
import { DefinedIntakeAnswerAvgOrderByAggregateInput } from './defined-intake-answer-avg-order-by-aggregate.input';
import { DefinedIntakeAnswerMaxOrderByAggregateInput } from './defined-intake-answer-max-order-by-aggregate.input';
import { DefinedIntakeAnswerMinOrderByAggregateInput } from './defined-intake-answer-min-order-by-aggregate.input';
import { DefinedIntakeAnswerSumOrderByAggregateInput } from './defined-intake-answer-sum-order-by-aggregate.input';

@InputType()
export class DefinedIntakeAnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intakeFormId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionKey?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    questionLabel?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    answerType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answerValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedIntakeAnswerCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedIntakeAnswerCountOrderByAggregateInput;

    @Field(() => DefinedIntakeAnswerAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedIntakeAnswerAvgOrderByAggregateInput;

    @Field(() => DefinedIntakeAnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedIntakeAnswerMaxOrderByAggregateInput;

    @Field(() => DefinedIntakeAnswerMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedIntakeAnswerMinOrderByAggregateInput;

    @Field(() => DefinedIntakeAnswerSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedIntakeAnswerSumOrderByAggregateInput;
}
