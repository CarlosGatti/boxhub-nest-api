import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageJourneyIdSlugCompoundUniqueInput } from './defined-academy-career-stage-journey-id-slug-compound-unique.input';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyCareerJourneyRelationFilter } from '../defined-academy-career-journey/defined-academy-career-journey-relation-filter.input';
import { DefinedAcademyCareerStageContentListRelationFilter } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-list-relation-filter.input';
import { DefinedAcademyUserCareerProfileListRelationFilter } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-list-relation-filter.input';
import { DefinedAcademyUserCareerStageCompletionListRelationFilter } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-list-relation-filter.input';

@InputType()
export class DefinedAcademyCareerStageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedAcademyCareerStageJourneyIdSlugCompoundUniqueInput, {nullable:true})
    journeyId_slug?: DefinedAcademyCareerStageJourneyIdSlugCompoundUniqueInput;

    @Field(() => [DefinedAcademyCareerStageWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerStageWhereInput>;

    @Field(() => [DefinedAcademyCareerStageWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerStageWhereInput>;

    @Field(() => [DefinedAcademyCareerStageWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerStageWhereInput>;

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

    @Field(() => DefinedAcademyCareerJourneyRelationFilter, {nullable:true})
    journey?: DefinedAcademyCareerJourneyRelationFilter;

    @Field(() => DefinedAcademyCareerStageContentListRelationFilter, {nullable:true})
    contentLinks?: DefinedAcademyCareerStageContentListRelationFilter;

    @Field(() => DefinedAcademyUserCareerProfileListRelationFilter, {nullable:true})
    currentProfiles?: DefinedAcademyUserCareerProfileListRelationFilter;

    @Field(() => DefinedAcademyUserCareerStageCompletionListRelationFilter, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionListRelationFilter;
}
