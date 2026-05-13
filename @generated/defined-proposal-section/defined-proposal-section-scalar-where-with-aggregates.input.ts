import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedProposalSectionTypeWithAggregatesFilter } from '../prisma/enum-defined-proposal-section-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedProposalSectionScalarWhereWithAggregatesInput {

    @Field(() => [DefinedProposalSectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedProposalSectionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProposalSectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedProposalSectionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProposalSectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedProposalSectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    proposalId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedProposalSectionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDefinedProposalSectionTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    body?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    contentJson?: JsonNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
