import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutPricingOptionsInput } from './defined-proposal-create-without-pricing-options.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutPricingOptionsInput } from './defined-proposal-create-or-connect-without-pricing-options.input';
import { DefinedProposalUpsertWithoutPricingOptionsInput } from './defined-proposal-upsert-without-pricing-options.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { DefinedProposalUpdateToOneWithWhereWithoutPricingOptionsInput } from './defined-proposal-update-to-one-with-where-without-pricing-options.input';

@InputType()
export class DefinedProposalUpdateOneRequiredWithoutPricingOptionsNestedInput {

    @Field(() => DefinedProposalCreateWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateWithoutPricingOptionsInput)
    create?: DefinedProposalCreateWithoutPricingOptionsInput;

    @Field(() => DefinedProposalCreateOrConnectWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutPricingOptionsInput)
    connectOrCreate?: DefinedProposalCreateOrConnectWithoutPricingOptionsInput;

    @Field(() => DefinedProposalUpsertWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalUpsertWithoutPricingOptionsInput)
    upsert?: DefinedProposalUpsertWithoutPricingOptionsInput;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalUpdateToOneWithWhereWithoutPricingOptionsInput, {nullable:true})
    @Type(() => DefinedProposalUpdateToOneWithWhereWithoutPricingOptionsInput)
    update?: DefinedProposalUpdateToOneWithWhereWithoutPricingOptionsInput;
}
