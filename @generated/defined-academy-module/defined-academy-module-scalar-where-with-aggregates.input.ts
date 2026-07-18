import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyContentStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-content-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyModuleScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyModuleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyModuleScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyModuleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyModuleScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyModuleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyModuleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    courseId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyContentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyContentStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
