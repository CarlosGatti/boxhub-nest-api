import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedProposalPricingTypeFilter } from '../prisma/enum-defined-proposal-pricing-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedProposalRelationFilter } from '../defined-proposal/defined-proposal-relation-filter.input';

@InputType()
export class DefinedProposalPricingOptionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedProposalPricingOptionWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    AND?: Array<DefinedProposalPricingOptionWhereInput>;

    @Field(() => [DefinedProposalPricingOptionWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    OR?: Array<DefinedProposalPricingOptionWhereInput>;

    @Field(() => [DefinedProposalPricingOptionWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    NOT?: Array<DefinedProposalPricingOptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    proposalId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedProposalPricingTypeFilter, {nullable:true})
    type?: EnumDefinedProposalPricingTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    amount?: DecimalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billingNote?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    features?: StringNullableListFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRecommended?: BoolFilter;

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
