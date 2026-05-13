import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutPricingOptionsInput } from './defined-proposal-create-without-pricing-options.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutPricingOptionsInput } from './defined-proposal-create-or-connect-without-pricing-options.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@InputType()
export class DefinedProposalCreateNestedOneWithoutPricingOptionsInput {

    @Field(() => DefinedProposalCreateWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateWithoutPricingOptionsInput)
    create?: DefinedProposalCreateWithoutPricingOptionsInput;

    @Field(() => DefinedProposalCreateOrConnectWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutPricingOptionsInput)
    connectOrCreate?: DefinedProposalCreateOrConnectWithoutPricingOptionsInput;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;
}
