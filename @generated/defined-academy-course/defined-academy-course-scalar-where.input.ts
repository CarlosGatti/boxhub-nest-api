import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyCourseStatusFilter } from '../prisma/enum-defined-academy-course-status-filter.input';
import { EnumDefinedAcademyCourseVisibilityFilter } from '../prisma/enum-defined-academy-course-visibility-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyCourseScalarWhereInput {

    @Field(() => [DefinedAcademyCourseScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCourseScalarWhereInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCourseScalarWhereInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCourseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverImageUrl?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyCourseStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyCourseStatusFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    level?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    estimatedDurationMinutes?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
