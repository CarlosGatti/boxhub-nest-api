import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCourseCountOrderByAggregateInput } from './defined-academy-course-count-order-by-aggregate.input';
import { DefinedAcademyCourseAvgOrderByAggregateInput } from './defined-academy-course-avg-order-by-aggregate.input';
import { DefinedAcademyCourseMaxOrderByAggregateInput } from './defined-academy-course-max-order-by-aggregate.input';
import { DefinedAcademyCourseMinOrderByAggregateInput } from './defined-academy-course-min-order-by-aggregate.input';
import { DefinedAcademyCourseSumOrderByAggregateInput } from './defined-academy-course-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyCourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coverImageUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    estimatedDurationMinutes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCourseCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyCourseCountOrderByAggregateInput;

    @Field(() => DefinedAcademyCourseAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCourseAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyCourseMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyCourseMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyCourseMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyCourseMinOrderByAggregateInput;

    @Field(() => DefinedAcademyCourseSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCourseSumOrderByAggregateInput;
}
