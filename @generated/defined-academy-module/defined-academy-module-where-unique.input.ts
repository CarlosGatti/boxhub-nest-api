import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyContentStatusFilter } from '../prisma/enum-defined-academy-content-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyCourseRelationFilter } from '../defined-academy-course/defined-academy-course-relation-filter.input';
import { DefinedAcademyLessonListRelationFilter } from '../defined-academy-lesson/defined-academy-lesson-list-relation-filter.input';

@InputType()
export class DefinedAcademyModuleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedAcademyModuleWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyModuleWhereInput>;

    @Field(() => [DefinedAcademyModuleWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyModuleWhereInput>;

    @Field(() => [DefinedAcademyModuleWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyModuleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    courseId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => EnumDefinedAcademyContentStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyContentStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyCourseRelationFilter, {nullable:true})
    course?: DefinedAcademyCourseRelationFilter;

    @Field(() => DefinedAcademyLessonListRelationFilter, {nullable:true})
    lessons?: DefinedAcademyLessonListRelationFilter;
}
