import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyCourseStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-course-status-with-aggregates-filter.input';
import { EnumDefinedAcademyCourseVisibilityWithAggregatesFilter } from '../prisma/enum-defined-academy-course-visibility-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyCourseScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyCourseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyCourseScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyCourseScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyCourseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    summary?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    coverImageUrl?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyCourseStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyCourseStatusWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    level?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    estimatedDurationMinutes?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    publishedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    createdById?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
