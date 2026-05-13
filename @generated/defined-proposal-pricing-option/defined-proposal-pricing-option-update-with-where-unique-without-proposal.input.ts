import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionUpdateWithoutProposalInput } from './defined-proposal-pricing-option-update-without-proposal.input';

@InputType()
export class DefinedProposalPricingOptionUpdateWithWhereUniqueWithoutProposalInput {

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalPricingOptionUpdateWithoutProposalInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionUpdateWithoutProposalInput)
    data!: DefinedProposalPricingOptionUpdateWithoutProposalInput;
}
