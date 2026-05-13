import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCreateInput } from './defined-proposal-pricing-option-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionCreateInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionCreateInput)
    data!: DefinedProposalPricingOptionCreateInput;
}
