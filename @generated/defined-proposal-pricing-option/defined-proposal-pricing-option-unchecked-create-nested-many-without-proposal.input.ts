import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCreateWithoutProposalInput } from './defined-proposal-pricing-option-create-without-proposal.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput } from './defined-proposal-pricing-option-create-or-connect-without-proposal.input';
import { DefinedProposalPricingOptionCreateManyProposalInputEnvelope } from './defined-proposal-pricing-option-create-many-proposal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';

@InputType()
export class DefinedProposalPricingOptionUncheckedCreateNestedManyWithoutProposalInput {

    @Field(() => [DefinedProposalPricingOptionCreateWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateWithoutProposalInput)
    create?: Array<DefinedProposalPricingOptionCreateWithoutProposalInput>;

    @Field(() => [DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput)
    connectOrCreate?: Array<DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput>;

    @Field(() => DefinedProposalPricingOptionCreateManyProposalInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateManyProposalInputEnvelope)
    createMany?: DefinedProposalPricingOptionCreateManyProposalInputEnvelope;

    @Field(() => [DefinedProposalPricingOptionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>>;
}
