import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionCreateWithoutProposalInput } from './defined-proposal-section-create-without-proposal.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionCreateOrConnectWithoutProposalInput } from './defined-proposal-section-create-or-connect-without-proposal.input';
import { DefinedProposalSectionCreateManyProposalInputEnvelope } from './defined-proposal-section-create-many-proposal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';

@InputType()
export class DefinedProposalSectionUncheckedCreateNestedManyWithoutProposalInput {

    @Field(() => [DefinedProposalSectionCreateWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionCreateWithoutProposalInput)
    create?: Array<DefinedProposalSectionCreateWithoutProposalInput>;

    @Field(() => [DefinedProposalSectionCreateOrConnectWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionCreateOrConnectWithoutProposalInput)
    connectOrCreate?: Array<DefinedProposalSectionCreateOrConnectWithoutProposalInput>;

    @Field(() => DefinedProposalSectionCreateManyProposalInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalSectionCreateManyProposalInputEnvelope)
    createMany?: DefinedProposalSectionCreateManyProposalInputEnvelope;

    @Field(() => [DefinedProposalSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>>;
}
