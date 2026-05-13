import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingType } from './defined-proposal-pricing-type.enum';

@InputType()
export class EnumDefinedProposalPricingTypeFieldUpdateOperationsInput {

    @Field(() => DefinedProposalPricingType, {nullable:true})
    set?: keyof typeof DefinedProposalPricingType;
}
