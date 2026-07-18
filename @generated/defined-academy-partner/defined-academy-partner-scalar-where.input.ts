import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyPartnerStatusFilter } from '../prisma/enum-defined-academy-partner-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyPartnerScalarWhereInput {

    @Field(() => [DefinedAcademyPartnerScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerScalarWhereInput>;

    @Field(() => [DefinedAcademyPartnerScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerScalarWhereInput>;

    @Field(() => [DefinedAcademyPartnerScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    categoryId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    websiteUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contactUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyPartnerStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyPartnerStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    featured?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
