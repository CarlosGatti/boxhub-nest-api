import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutPricingOptionsInput } from './defined-proposal-create-without-pricing-options.input';

@InputType()
export class DefinedProposalCreateOrConnectWithoutPricingOptionsInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateWithoutPricingOptionsInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutPricingOptionsInput)
    create!: DefinedProposalCreateWithoutPricingOptionsInput;
}
