import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyLessonProgressStatusFilter } from '../prisma/enum-defined-academy-lesson-progress-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyLessonProgressScalarWhereInput {

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyLessonProgressScalarWhereInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyLessonProgressScalarWhereInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyLessonProgressScalarWhereInput>;

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
}
