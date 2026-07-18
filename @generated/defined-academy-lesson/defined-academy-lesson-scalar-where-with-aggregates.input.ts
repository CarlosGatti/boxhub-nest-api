import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyLessonTypeWithAggregatesFilter } from '../prisma/enum-defined-academy-lesson-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyContentStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-content-status-with-aggregates-filter.input';
import { EnumDefinedAcademyCourseVisibilityWithAggregatesFilter } from '../prisma/enum-defined-academy-course-visibility-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyLessonScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyLessonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyLessonScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyLessonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyLessonScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyLessonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyLessonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    moduleId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    summary?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyLessonTypeWithAggregatesFilter, {nullable:true})
    lessonType?: EnumDefinedAcademyLessonTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    videoUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    videoProvider?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    videoDurationSeconds?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bodyContent?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyContentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyContentStatusWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPreview?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    publishedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
