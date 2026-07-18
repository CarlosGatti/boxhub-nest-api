import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyPartnerCategoryScalarWhereInput {

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerCategoryScalarWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerCategoryScalarWhereInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerCategoryScalarWhereInput>;

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
}
