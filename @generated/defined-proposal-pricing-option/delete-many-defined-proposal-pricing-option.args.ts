import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    where?: DefinedProposalPricingOptionWhereInput;
}
