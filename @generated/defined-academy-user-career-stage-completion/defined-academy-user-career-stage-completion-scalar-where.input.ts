import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionScalarWhereInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereInput>;

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
}
