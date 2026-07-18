import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyLessonCountOrderByAggregateInput } from './defined-academy-lesson-count-order-by-aggregate.input';
import { DefinedAcademyLessonAvgOrderByAggregateInput } from './defined-academy-lesson-avg-order-by-aggregate.input';
import { DefinedAcademyLessonMaxOrderByAggregateInput } from './defined-academy-lesson-max-order-by-aggregate.input';
import { DefinedAcademyLessonMinOrderByAggregateInput } from './defined-academy-lesson-min-order-by-aggregate.input';
import { DefinedAcademyLessonSumOrderByAggregateInput } from './defined-academy-lesson-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyLessonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    moduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    lessonType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    videoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    videoProvider?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    videoDurationSeconds?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bodyContent?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPreview?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyLessonCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyLessonCountOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyLessonAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyLessonMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyLessonMinOrderByAggregateInput;

    @Field(() => DefinedAcademyLessonSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyLessonSumOrderByAggregateInput;
}
