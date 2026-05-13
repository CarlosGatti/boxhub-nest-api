import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedProposalPricingOptionArgs {

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;
}
