import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCreateInput } from './defined-proposal-pricing-option-create.input';
import { DefinedProposalPricingOptionUpdateInput } from './defined-proposal-pricing-option-update.input';

@ArgsType()
export class UpsertOneDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalPricingOptionCreateInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionCreateInput)
    create!: DefinedProposalPricingOptionCreateInput;

    @Field(() => DefinedProposalPricingOptionUpdateInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionUpdateInput)
    update!: DefinedProposalPricingOptionUpdateInput;
}
