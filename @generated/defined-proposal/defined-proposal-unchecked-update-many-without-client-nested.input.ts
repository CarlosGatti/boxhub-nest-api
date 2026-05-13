import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutClientInput } from './defined-proposal-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutClientInput } from './defined-proposal-create-or-connect-without-client.input';
import { DefinedProposalUpsertWithWhereUniqueWithoutClientInput } from './defined-proposal-upsert-with-where-unique-without-client.input';
import { DefinedProposalCreateManyClientInputEnvelope } from './defined-proposal-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { DefinedProposalUpdateWithWhereUniqueWithoutClientInput } from './defined-proposal-update-with-where-unique-without-client.input';
import { DefinedProposalUpdateManyWithWhereWithoutClientInput } from './defined-proposal-update-many-with-where-without-client.input';
import { DefinedProposalScalarWhereInput } from './defined-proposal-scalar-where.input';

@InputType()
export class DefinedProposalUncheckedUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedProposalCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutClientInput)
    create?: Array<DefinedProposalCreateWithoutClientInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedProposalUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedProposalUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedProposalCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyClientInputEnvelope)
    createMany?: DefinedProposalCreateManyClientInputEnvelope;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedProposalUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedProposalUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedProposalUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedProposalUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalScalarWhereInput)
    deleteMany?: Array<DefinedProposalScalarWhereInput>;
}
