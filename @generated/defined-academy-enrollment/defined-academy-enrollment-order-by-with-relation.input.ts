import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCourseOrderByWithRelationInput } from '../defined-academy-course/defined-academy-course-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressOrderByRelationAggregateInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyEnrollmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enrolledAt?: keyof typeof SortOrder;

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

    @Field(() => DefinedAcademyCourseOrderByWithRelationInput, {nullable:true})
    course?: DefinedAcademyCourseOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyLessonProgressOrderByRelationAggregateInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressOrderByRelationAggregateInput;
}
