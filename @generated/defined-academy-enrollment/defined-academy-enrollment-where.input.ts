import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyEnrollmentStatusFilter } from '../prisma/enum-defined-academy-enrollment-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DefinedAcademyCourseRelationFilter } from '../defined-academy-course/defined-academy-course-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressListRelationFilter } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-list-relation-filter.input';

@InputType()
export class DefinedAcademyEnrollmentWhereInput {

    @Field(() => [DefinedAcademyEnrollmentWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyEnrollmentWhereInput>;

    @Field(() => [DefinedAcademyEnrollmentWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyEnrollmentWhereInput>;

    @Field(() => [DefinedAcademyEnrollmentWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyEnrollmentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    courseId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumDefinedAcademyEnrollmentStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyEnrollmentStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    enrolledAt?: DateTimeFilter;

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

    @Field(() => DefinedAcademyCourseRelationFilter, {nullable:true})
    course?: DefinedAcademyCourseRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => DefinedAcademyLessonProgressListRelationFilter, {nullable:true})
    progress?: DefinedAcademyLessonProgressListRelationFilter;
}
