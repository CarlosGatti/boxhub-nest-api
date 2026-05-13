import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionOrderByWithRelationInput } from './defined-proposal-pricing-option-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingOptionScalarFieldEnum } from './defined-proposal-pricing-option-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedProposalPricingOptionOrThrowArgs {

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    where?: DefinedProposalPricingOptionWhereInput;

    @Field(() => [DefinedProposalPricingOptionOrderByWithRelationInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionOrderByWithRelationInput)
    orderBy?: Array<DefinedProposalPricingOptionOrderByWithRelationInput>;

    @Field(() => DefinedProposalPricingOptionWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    cursor?: Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedProposalPricingOptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedProposalPricingOptionScalarFieldEnum>;
}
