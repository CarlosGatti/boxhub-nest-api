import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCreateWithoutProposalInput } from './defined-proposal-pricing-option-create-without-proposal.input';

@InputType()
export class DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput {

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;

    @Field(() => DefinedProposalPricingOptionCreateWithoutProposalInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionCreateWithoutProposalInput)
    create!: DefinedProposalPricingOptionCreateWithoutProposalInput;
}
