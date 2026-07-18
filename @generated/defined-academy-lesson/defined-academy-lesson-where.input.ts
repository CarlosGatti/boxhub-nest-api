import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyLessonTypeFilter } from '../prisma/enum-defined-academy-lesson-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedAcademyContentStatusFilter } from '../prisma/enum-defined-academy-content-status-filter.input';
import { EnumDefinedAcademyCourseVisibilityFilter } from '../prisma/enum-defined-academy-course-visibility-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyModuleRelationFilter } from '../defined-academy-module/defined-academy-module-relation-filter.input';
import { DefinedAcademyResourceListRelationFilter } from '../defined-academy-resource/defined-academy-resource-list-relation-filter.input';
import { DefinedAcademyLessonProgressListRelationFilter } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-list-relation-filter.input';

@InputType()
export class DefinedAcademyLessonWhereInput {

    @Field(() => [DefinedAcademyLessonWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyLessonWhereInput>;

    @Field(() => [DefinedAcademyLessonWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyLessonWhereInput>;

    @Field(() => [DefinedAcademyLessonWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyLessonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    moduleId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyLessonTypeFilter, {nullable:true})
    lessonType?: EnumDefinedAcademyLessonTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    videoUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    videoProvider?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    videoDurationSeconds?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bodyContent?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => EnumDefinedAcademyContentStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyContentStatusFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPreview?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyModuleRelationFilter, {nullable:true})
    module?: DefinedAcademyModuleRelationFilter;

    @Field(() => DefinedAcademyResourceListRelationFilter, {nullable:true})
    resources?: DefinedAcademyResourceListRelationFilter;

    @Field(() => DefinedAcademyLessonProgressListRelationFilter, {nullable:true})
    progress?: DefinedAcademyLessonProgressListRelationFilter;
}
