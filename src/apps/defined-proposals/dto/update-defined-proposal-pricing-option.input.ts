import { InputType, PartialType } from '@nestjs/graphql';
import { CreateDefinedProposalPricingOptionInput } from './create-defined-proposal-pricing-option.input';

@InputType()
export class UpdateDefinedProposalPricingOptionInput extends PartialType(
  CreateDefinedProposalPricingOptionInput,
) {}
