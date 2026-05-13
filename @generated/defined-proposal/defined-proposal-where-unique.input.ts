import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedProposalStatusFilter } from '../prisma/enum-defined-proposal-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedClientRelationFilter } from '../defined-client/defined-client-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { DefinedProposalSectionListRelationFilter } from '../defined-proposal-section/defined-proposal-section-list-relation-filter.input';
import { DefinedProposalPricingOptionListRelationFilter } from '../defined-proposal-pricing-option/defined-proposal-pricing-option-list-relation-filter.input';

@InputType()
export class DefinedProposalWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => [DefinedProposalWhereInput], {nullable:true})
    AND?: Array<DefinedProposalWhereInput>;

    @Field(() => [DefinedProposalWhereInput], {nullable:true})
    OR?: Array<DefinedProposalWhereInput>;

    @Field(() => [DefinedProposalWhereInput], {nullable:true})
    NOT?: Array<DefinedProposalWhereInput>;

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

    @Field(() => DefinedClientRelationFilter, {nullable:true})
    @Type(() => DefinedClientRelationFilter)
    client?: DefinedClientRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    @Type(() => DefinedProjectNullableRelationFilter)
    project?: DefinedProjectNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    createdBy?: UserNullableRelationFilter;

    @Field(() => DefinedProposalSectionListRelationFilter, {nullable:true})
    sections?: DefinedProposalSectionListRelationFilter;

    @Field(() => DefinedProposalPricingOptionListRelationFilter, {nullable:true})
    @Type(() => DefinedProposalPricingOptionListRelationFilter)
    pricingOptions?: DefinedProposalPricingOptionListRelationFilter;
}
