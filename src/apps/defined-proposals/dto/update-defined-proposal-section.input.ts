import { InputType, PartialType } from '@nestjs/graphql';
import { CreateDefinedProposalSectionInput } from './create-defined-proposal-section.input';

@InputType()
export class UpdateDefinedProposalSectionInput extends PartialType(
  CreateDefinedProposalSectionInput,
) {}
