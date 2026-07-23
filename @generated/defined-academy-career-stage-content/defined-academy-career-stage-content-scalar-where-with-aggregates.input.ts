import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter } from '../prisma/enum-defined-academy-career-stage-content-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerStageContentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stageId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter, {nullable:true})
    contentType?: EnumDefinedAcademyCareerStageContentTypeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    courseId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    resourceId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    label?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
