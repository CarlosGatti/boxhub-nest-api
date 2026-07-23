import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    journeyId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    currentStageId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
