import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedProposalPricingTypeFilter } from '../prisma/enum-defined-proposal-pricing-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedProposalPricingOptionScalarWhereInput {

    @Field(() => [DefinedProposalPricingOptionScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereInput)
    AND?: Array<DefinedProposalPricingOptionScalarWhereInput>;

    @Field(() => [DefinedProposalPricingOptionScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereInput)
    OR?: Array<DefinedProposalPricingOptionScalarWhereInput>;

    @Field(() => [DefinedProposalPricingOptionScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereInput)
    NOT?: Array<DefinedProposalPricingOptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
