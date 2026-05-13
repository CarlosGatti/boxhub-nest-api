import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalUpdateWithoutPricingOptionsInput } from './defined-proposal-update-without-pricing-options.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutPricingOptionsInput } from './defined-proposal-create-without-pricing-options.input';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';

@InputType()
export class DefinedProposalUpsertWithoutPricingOptionsInput {

    @Field(() => DefinedProposalUpdateWithoutPricingOptionsInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutPricingOptionsInput)
    update!: DefinedProposalUpdateWithoutPricingOptionsInput;

    @Field(() => DefinedProposalCreateWithoutPricingOptionsInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutPricingOptionsInput)
    create!: DefinedProposalCreateWithoutPricingOptionsInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;
}
