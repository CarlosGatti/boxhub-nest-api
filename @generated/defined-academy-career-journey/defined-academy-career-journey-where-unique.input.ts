import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyAcademyIdSlugCompoundUniqueInput } from './defined-academy-career-journey-academy-id-slug-compound-unique.input';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyCareerJourneyStatusFilter } from '../prisma/enum-defined-academy-career-journey-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyCareerStageListRelationFilter } from '../defined-academy-career-stage/defined-academy-career-stage-list-relation-filter.input';
import { DefinedAcademyUserCareerProfileListRelationFilter } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-list-relation-filter.input';

@InputType()
export class DefinedAcademyCareerJourneyWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => DefinedAcademyCareerJourneyAcademyIdSlugCompoundUniqueInput, {nullable:true})
    academyId_slug?: DefinedAcademyCareerJourneyAcademyIdSlugCompoundUniqueInput;

    @Field(() => [DefinedAcademyCareerJourneyWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerJourneyWhereInput>;

    @Field(() => [DefinedAcademyCareerJourneyWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerJourneyWhereInput>;

    @Field(() => [DefinedAcademyCareerJourneyWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerJourneyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyCareerJourneyStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyCareerJourneyStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyCareerStageListRelationFilter, {nullable:true})
    stages?: DefinedAcademyCareerStageListRelationFilter;

    @Field(() => DefinedAcademyUserCareerProfileListRelationFilter, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileListRelationFilter;
}
