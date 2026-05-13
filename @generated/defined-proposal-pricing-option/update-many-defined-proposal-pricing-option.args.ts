import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionUpdateManyMutationInput } from './defined-proposal-pricing-option-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';

@ArgsType()
export class UpdateManyDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionUpdateManyMutationInput)
    data!: DefinedProposalPricingOptionUpdateManyMutationInput;

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    where?: DefinedProposalPricingOptionWhereInput;
}
