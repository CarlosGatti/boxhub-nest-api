import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedBrandingProjectStatusFilter } from '../prisma/enum-defined-branding-project-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedBrandingProjectScalarWhereInput {

    @Field(() => [DefinedBrandingProjectScalarWhereInput], {nullable:true})
    AND?: Array<DefinedBrandingProjectScalarWhereInput>;

    @Field(() => [DefinedBrandingProjectScalarWhereInput], {nullable:true})
    OR?: Array<DefinedBrandingProjectScalarWhereInput>;

    @Field(() => [DefinedBrandingProjectScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedBrandingProjectScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    concept?: StringNullableFilter;

    @Field(() => EnumDefinedBrandingProjectStatusFilter, {nullable:true})
    status?: EnumDefinedBrandingProjectStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPublic?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isFeatured?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverImageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    brandManualPdfUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourcePdfFileName?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
