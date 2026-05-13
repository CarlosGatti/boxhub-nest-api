import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionUpdateInput } from './defined-proposal-pricing-option-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';

@ArgsType()
export class UpdateOneDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionUpdateInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionUpdateInput)
    data!: DefinedProposalPricingOptionUpdateInput;

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;
}
