import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedProposalSectionTypeFilter } from '../prisma/enum-defined-proposal-section-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedProposalRelationFilter } from '../defined-proposal/defined-proposal-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalSectionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedProposalSectionWhereInput], {nullable:true})
    AND?: Array<DefinedProposalSectionWhereInput>;

    @Field(() => [DefinedProposalSectionWhereInput], {nullable:true})
    OR?: Array<DefinedProposalSectionWhereInput>;

    @Field(() => [DefinedProposalSectionWhereInput], {nullable:true})
    NOT?: Array<DefinedProposalSectionWhereInput>;

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

    @Field(() => DefinedProposalRelationFilter, {nullable:true})
    @Type(() => DefinedProposalRelationFilter)
    proposal?: DefinedProposalRelationFilter;
}
