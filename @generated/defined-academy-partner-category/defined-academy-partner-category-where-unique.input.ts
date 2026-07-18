import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryAcademyIdSlugCompoundUniqueInput } from './defined-academy-partner-category-academy-id-slug-compound-unique.input';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyPartnerListRelationFilter } from '../defined-academy-partner/defined-academy-partner-list-relation-filter.input';

@InputType()
export class DefinedAcademyPartnerCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedAcademyPartnerCategoryAcademyIdSlugCompoundUniqueInput, {nullable:true})
    academyId_slug?: DefinedAcademyPartnerCategoryAcademyIdSlugCompoundUniqueInput;

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyPartnerListRelationFilter, {nullable:true})
    partners?: DefinedAcademyPartnerListRelationFilter;
}
