import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedProposalPricingTypeWithAggregatesFilter } from '../prisma/enum-defined-proposal-pricing-type-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedProposalPricingOptionScalarWhereWithAggregatesInput {

    @Field(() => [DefinedProposalPricingOptionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereWithAggregatesInput)
    AND?: Array<DefinedProposalPricingOptionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProposalPricingOptionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereWithAggregatesInput)
    OR?: Array<DefinedProposalPricingOptionScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedProposalPricingOptionScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereWithAggregatesInput)
    NOT?: Array<DefinedProposalPricingOptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    proposalId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedProposalPricingTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDefinedProposalPricingTypeWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    amount?: DecimalNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    billingNote?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    features?: StringNullableListFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isRecommended?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
