import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCourseOrderByWithRelationInput } from '../defined-academy-course/defined-academy-course-order-by-with-relation.input';
import { DefinedAcademyLessonOrderByRelationAggregateInput } from '../defined-academy-lesson/defined-academy-lesson-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyModuleOrderByWithRelationInput {

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

    @Field(() => DefinedAcademyCourseOrderByWithRelationInput, {nullable:true})
    course?: DefinedAcademyCourseOrderByWithRelationInput;

    @Field(() => DefinedAcademyLessonOrderByRelationAggregateInput, {nullable:true})
    lessons?: DefinedAcademyLessonOrderByRelationAggregateInput;
}
