import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    profileId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stageId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    completedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;
}
