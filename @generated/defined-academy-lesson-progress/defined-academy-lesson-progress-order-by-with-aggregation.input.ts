import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyLessonProgressCountOrderByAggregateInput } from './defined-academy-lesson-progress-count-order-by-aggregate.input';
import { DefinedAcademyLessonProgressAvgOrderByAggregateInput } from './defined-academy-lesson-progress-avg-order-by-aggregate.input';
import { DefinedAcademyLessonProgressMaxOrderByAggregateInput } from './defined-academy-lesson-progress-max-order-by-aggregate.input';
import { DefinedAcademyLessonProgressMinOrderByAggregateInput } from './defined-academy-lesson-progress-min-order-by-aggregate.input';
import { DefinedAcademyLessonProgressSumOrderByAggregateInput } from './defined-academy-lesson-progress-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyLessonProgressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enrollmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lessonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    progressPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastPositionSeconds?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    startedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastAccessedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyLessonProgressCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyLessonProgressCountOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonProgressAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyLessonProgressAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonProgressMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyLessonProgressMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonProgressMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyLessonProgressMinOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonProgressSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyLessonProgressSumOrderByAggregateInput;
}
