import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedProposalSectionTypeFilter } from '../prisma/enum-defined-proposal-section-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedProposalSectionScalarWhereInput {

    @Field(() => [DefinedProposalSectionScalarWhereInput], {nullable:true})
    AND?: Array<DefinedProposalSectionScalarWhereInput>;

    @Field(() => [DefinedProposalSectionScalarWhereInput], {nullable:true})
    OR?: Array<DefinedProposalSectionScalarWhereInput>;

    @Field(() => [DefinedProposalSectionScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedProposalSectionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    proposalId?: IntFilter;

    @Field(() => EnumDefinedProposalSectionTypeFilter, {nullable:true})
    type?: EnumDefinedProposalSectionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    body?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contentJson?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
