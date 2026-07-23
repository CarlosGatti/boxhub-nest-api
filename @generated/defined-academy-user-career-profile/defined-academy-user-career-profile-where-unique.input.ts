import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileUserIdAcademyIdCompoundUniqueInput } from './defined-academy-user-career-profile-user-id-academy-id-compound-unique.input';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyCareerJourneyRelationFilter } from '../defined-academy-career-journey/defined-academy-career-journey-relation-filter.input';
import { DefinedAcademyCareerStageNullableRelationFilter } from '../defined-academy-career-stage/defined-academy-career-stage-nullable-relation-filter.input';
import { DefinedAcademyUserCareerStageCompletionListRelationFilter } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-list-relation-filter.input';

@InputType()
export class DefinedAcademyUserCareerProfileWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedAcademyUserCareerProfileUserIdAcademyIdCompoundUniqueInput, {nullable:true})
    userId_academyId?: DefinedAcademyUserCareerProfileUserIdAcademyIdCompoundUniqueInput;

    @Field(() => [DefinedAcademyUserCareerProfileWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerProfileWhereInput>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerProfileWhereInput>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    journeyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    currentStageId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyCareerJourneyRelationFilter, {nullable:true})
    journey?: DefinedAcademyCareerJourneyRelationFilter;

    @Field(() => DefinedAcademyCareerStageNullableRelationFilter, {nullable:true})
    currentStage?: DefinedAcademyCareerStageNullableRelationFilter;

    @Field(() => DefinedAcademyUserCareerStageCompletionListRelationFilter, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionListRelationFilter;
}
