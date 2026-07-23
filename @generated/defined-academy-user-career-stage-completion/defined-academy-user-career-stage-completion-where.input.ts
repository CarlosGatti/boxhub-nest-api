import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DefinedAcademyUserCareerProfileRelationFilter } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-relation-filter.input';
import { DefinedAcademyCareerStageRelationFilter } from '../defined-academy-career-stage/defined-academy-career-stage-relation-filter.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionWhereInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerStageCompletionWhereInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerStageCompletionWhereInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerStageCompletionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stageId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    completedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DefinedAcademyUserCareerProfileRelationFilter, {nullable:true})
    profile?: DefinedAcademyUserCareerProfileRelationFilter;

    @Field(() => DefinedAcademyCareerStageRelationFilter, {nullable:true})
    stage?: DefinedAcademyCareerStageRelationFilter;
}
