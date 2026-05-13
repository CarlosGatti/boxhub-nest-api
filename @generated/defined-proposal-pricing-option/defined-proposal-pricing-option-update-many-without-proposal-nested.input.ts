import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCreateWithoutProposalInput } from './defined-proposal-pricing-option-create-without-proposal.input';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput } from './defined-proposal-pricing-option-create-or-connect-without-proposal.input';
import { DefinedProposalPricingOptionUpsertWithWhereUniqueWithoutProposalInput } from './defined-proposal-pricing-option-upsert-with-where-unique-without-proposal.input';
import { DefinedProposalPricingOptionCreateManyProposalInputEnvelope } from './defined-proposal-pricing-option-create-many-proposal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalPricingOptionWhereUniqueInput } from './defined-proposal-pricing-option-where-unique.input';
import { DefinedProposalPricingOptionUpdateWithWhereUniqueWithoutProposalInput } from './defined-proposal-pricing-option-update-with-where-unique-without-proposal.input';
import { DefinedProposalPricingOptionUpdateManyWithWhereWithoutProposalInput } from './defined-proposal-pricing-option-update-many-with-where-without-proposal.input';
import { DefinedProposalPricingOptionScalarWhereInput } from './defined-proposal-pricing-option-scalar-where.input';

@InputType()
export class DefinedProposalPricingOptionUpdateManyWithoutProposalNestedInput {

    @Field(() => [DefinedProposalPricingOptionCreateWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateWithoutProposalInput)
    create?: Array<DefinedProposalPricingOptionCreateWithoutProposalInput>;

    @Field(() => [DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput)
    connectOrCreate?: Array<DefinedProposalPricingOptionCreateOrConnectWithoutProposalInput>;

    @Field(() => [DefinedProposalPricingOptionUpsertWithWhereUniqueWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionUpsertWithWhereUniqueWithoutProposalInput)
    upsert?: Array<DefinedProposalPricingOptionUpsertWithWhereUniqueWithoutProposalInput>;

    @Field(() => DefinedProposalPricingOptionCreateManyProposalInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateManyProposalInputEnvelope)
    createMany?: DefinedProposalPricingOptionCreateManyProposalInputEnvelope;

    @Field(() => [DefinedProposalPricingOptionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalPricingOptionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalPricingOptionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalPricingOptionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalPricingOptionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalPricingOptionUpdateWithWhereUniqueWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionUpdateWithWhereUniqueWithoutProposalInput)
    update?: Array<DefinedProposalPricingOptionUpdateWithWhereUniqueWithoutProposalInput>;

    @Field(() => [DefinedProposalPricingOptionUpdateManyWithWhereWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionUpdateManyWithWhereWithoutProposalInput)
    updateMany?: Array<DefinedProposalPricingOptionUpdateManyWithWhereWithoutProposalInput>;

    @Field(() => [DefinedProposalPricingOptionScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalPricingOptionScalarWhereInput)
    deleteMany?: Array<DefinedProposalPricingOptionScalarWhereInput>;
}
