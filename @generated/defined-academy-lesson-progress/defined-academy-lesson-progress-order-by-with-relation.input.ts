import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyEnrollmentOrderByWithRelationInput } from '../defined-academy-enrollment/defined-academy-enrollment-order-by-with-relation.input';
import { DefinedAcademyLessonOrderByWithRelationInput } from '../defined-academy-lesson/defined-academy-lesson-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressOrderByWithRelationInput {

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

    @Field(() => DefinedAcademyEnrollmentOrderByWithRelationInput, {nullable:true})
    enrollment?: DefinedAcademyEnrollmentOrderByWithRelationInput;

    @Field(() => DefinedAcademyLessonOrderByWithRelationInput, {nullable:true})
    lesson?: DefinedAcademyLessonOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
