import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedProposalStatusFilter } from '../prisma/enum-defined-proposal-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedProposalScalarWhereInput {

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    AND?: Array<DefinedProposalScalarWhereInput>;

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    OR?: Array<DefinedProposalScalarWhereInput>;

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedProposalScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subtitle?: StringNullableFilter;

    @Field(() => EnumDefinedProposalStatusFilter, {nullable:true})
    status?: EnumDefinedProposalStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contentJson?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shareToken?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareTokenCreatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareTokenExpiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareRevokedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    sentAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    viewedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    approvedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    declinedAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
