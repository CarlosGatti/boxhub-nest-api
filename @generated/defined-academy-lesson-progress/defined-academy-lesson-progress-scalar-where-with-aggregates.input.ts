import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedAcademyLessonProgressStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-lesson-progress-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyLessonProgressScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyLessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyLessonProgressScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyLessonProgressScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyLessonProgressScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    enrollmentId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    lessonId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyLessonProgressStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyLessonProgressStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    progressPercentage?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    lastPositionSeconds?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    completedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastAccessedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
