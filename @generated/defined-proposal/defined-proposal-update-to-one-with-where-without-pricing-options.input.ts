import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateWithoutPricingOptionsInput } from './defined-proposal-update-without-pricing-options.input';

@InputType()
export class DefinedProposalUpdateToOneWithWhereWithoutPricingOptionsInput {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;

    @Field(() => DefinedProposalUpdateWithoutPricingOptionsInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutPricingOptionsInput)
    data!: DefinedProposalUpdateWithoutPricingOptionsInput;
}
