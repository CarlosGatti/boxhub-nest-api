import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionScalarWhereInput } from './defined-proposal-pricing-option-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionUpdateManyMutationInput } from './defined-proposal-pricing-option-update-many-mutation.input';

@InputType()
export class DefinedProposalPricingOptionUpdateManyWithWhereWithoutProposalInput {

    @Field(() => DefinedProposalPricingOptionScalarWhereInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionScalarWhereInput)
    where!: DefinedProposalPricingOptionScalarWhereInput;

    @Field(() => DefinedProposalPricingOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionUpdateManyMutationInput)
    data!: DefinedProposalPricingOptionUpdateManyMutationInput;
}
