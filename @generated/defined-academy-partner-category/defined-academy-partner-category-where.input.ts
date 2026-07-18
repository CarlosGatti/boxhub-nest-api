import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyPartnerListRelationFilter } from '../defined-academy-partner/defined-academy-partner-list-relation-filter.input';

@InputType()
export class DefinedAcademyPartnerCategoryWhereInput {

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
