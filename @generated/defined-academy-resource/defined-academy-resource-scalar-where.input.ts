import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyResourceTypeFilter } from '../prisma/enum-defined-academy-resource-type-filter.input';
import { EnumDefinedAcademyCourseVisibilityFilter } from '../prisma/enum-defined-academy-course-visibility-filter.input';
import { EnumDefinedAcademyResourceStatusFilter } from '../prisma/enum-defined-academy-resource-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyResourceScalarWhereInput {

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyResourceScalarWhereInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyResourceScalarWhereInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyResourceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lessonId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyResourceTypeFilter, {nullable:true})
    type?: EnumDefinedAcademyResourceTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    externalUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    textContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mimeType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileName?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fileSize?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => EnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => EnumDefinedAcademyResourceStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyResourceStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    downloadable?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
