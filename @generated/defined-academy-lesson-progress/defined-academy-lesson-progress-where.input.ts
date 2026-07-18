import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyLessonProgressStatusFilter } from '../prisma/enum-defined-academy-lesson-progress-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyEnrollmentRelationFilter } from '../defined-academy-enrollment/defined-academy-enrollment-relation-filter.input';
import { DefinedAcademyLessonRelationFilter } from '../defined-academy-lesson/defined-academy-lesson-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressWhereInput {

    @Field(() => [DefinedAcademyLessonProgressWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyLessonProgressWhereInput>;

    @Field(() => [DefinedAcademyLessonProgressWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyLessonProgressWhereInput>;

    @Field(() => [DefinedAcademyLessonProgressWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyLessonProgressWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    enrollmentId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    lessonId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumDefinedAcademyLessonProgressStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyLessonProgressStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    progressPercentage?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lastPositionSeconds?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastAccessedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyEnrollmentRelationFilter, {nullable:true})
    enrollment?: DefinedAcademyEnrollmentRelationFilter;

    @Field(() => DefinedAcademyLessonRelationFilter, {nullable:true})
    lesson?: DefinedAcademyLessonRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
