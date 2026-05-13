import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCreateManyInput } from './defined-proposal-pricing-option-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedProposalPricingOptionArgs {

    @Field(() => [DefinedProposalPricingOptionCreateManyInput], {nullable:false})
    @Type(() => DefinedProposalPricingOptionCreateManyInput)
    data!: Array<DefinedProposalPricingOptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
