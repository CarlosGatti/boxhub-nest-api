import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
