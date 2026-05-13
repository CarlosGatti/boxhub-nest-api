import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCreateManyProposalInput } from './defined-proposal-pricing-option-create-many-proposal.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalPricingOptionCreateManyProposalInputEnvelope {

    @Field(() => [DefinedProposalPricingOptionCreateManyProposalInput], {nullable:false})
    @Type(() => DefinedProposalPricingOptionCreateManyProposalInput)
    data!: Array<DefinedProposalPricingOptionCreateManyProposalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
