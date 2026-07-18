import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyResourceTypeWithAggregatesFilter } from '../prisma/enum-defined-academy-resource-type-with-aggregates-filter.input';
import { EnumDefinedAcademyCourseVisibilityWithAggregatesFilter } from '../prisma/enum-defined-academy-course-visibility-with-aggregates-filter.input';
import { EnumDefinedAcademyResourceStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-resource-status-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyResourceScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyResourceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyResourceScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyResourceScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyResourceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    lessonId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyResourceTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDefinedAcademyResourceTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fileUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    externalUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    textContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    mimeType?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fileName?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fileSize?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyResourceStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyResourceStatusWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    downloadable?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    createdById?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
