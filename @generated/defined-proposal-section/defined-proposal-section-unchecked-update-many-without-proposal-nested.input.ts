import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionCreateWithoutProposalInput } from './defined-proposal-section-create-without-proposal.input';
import { Type } from 'class-transformer';
import { DefinedProposalSectionCreateOrConnectWithoutProposalInput } from './defined-proposal-section-create-or-connect-without-proposal.input';
import { DefinedProposalSectionUpsertWithWhereUniqueWithoutProposalInput } from './defined-proposal-section-upsert-with-where-unique-without-proposal.input';
import { DefinedProposalSectionCreateManyProposalInputEnvelope } from './defined-proposal-section-create-many-proposal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalSectionWhereUniqueInput } from './defined-proposal-section-where-unique.input';
import { DefinedProposalSectionUpdateWithWhereUniqueWithoutProposalInput } from './defined-proposal-section-update-with-where-unique-without-proposal.input';
import { DefinedProposalSectionUpdateManyWithWhereWithoutProposalInput } from './defined-proposal-section-update-many-with-where-without-proposal.input';
import { DefinedProposalSectionScalarWhereInput } from './defined-proposal-section-scalar-where.input';

@InputType()
export class DefinedProposalSectionUncheckedUpdateManyWithoutProposalNestedInput {

    @Field(() => [DefinedProposalSectionCreateWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionCreateWithoutProposalInput)
    create?: Array<DefinedProposalSectionCreateWithoutProposalInput>;

    @Field(() => [DefinedProposalSectionCreateOrConnectWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionCreateOrConnectWithoutProposalInput)
    connectOrCreate?: Array<DefinedProposalSectionCreateOrConnectWithoutProposalInput>;

    @Field(() => [DefinedProposalSectionUpsertWithWhereUniqueWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionUpsertWithWhereUniqueWithoutProposalInput)
    upsert?: Array<DefinedProposalSectionUpsertWithWhereUniqueWithoutProposalInput>;

    @Field(() => DefinedProposalSectionCreateManyProposalInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalSectionCreateManyProposalInputEnvelope)
    createMany?: DefinedProposalSectionCreateManyProposalInputEnvelope;

    @Field(() => [DefinedProposalSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedProposalSectionUpdateWithWhereUniqueWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionUpdateWithWhereUniqueWithoutProposalInput)
    update?: Array<DefinedProposalSectionUpdateWithWhereUniqueWithoutProposalInput>;

    @Field(() => [DefinedProposalSectionUpdateManyWithWhereWithoutProposalInput], {nullable:true})
    @Type(() => DefinedProposalSectionUpdateManyWithWhereWithoutProposalInput)
    updateMany?: Array<DefinedProposalSectionUpdateManyWithWhereWithoutProposalInput>;

    @Field(() => [DefinedProposalSectionScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalSectionScalarWhereInput)
    deleteMany?: Array<DefinedProposalSectionScalarWhereInput>;
}
