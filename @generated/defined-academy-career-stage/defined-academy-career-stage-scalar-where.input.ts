import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyCareerStageScalarWhereInput {

    @Field(() => [DefinedAcademyCareerStageScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerStageScalarWhereInput>;

    @Field(() => [DefinedAcademyCareerStageScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerStageScalarWhereInput>;

    @Field(() => [DefinedAcademyCareerStageScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerStageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    journeyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    iconKey?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
