import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutClientInput } from './defined-proposal-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutClientInput } from './defined-proposal-create-or-connect-without-client.input';
import { DefinedProposalCreateManyClientInputEnvelope } from './defined-proposal-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@InputType()
export class DefinedProposalUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedProposalCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutClientInput)
    create?: Array<DefinedProposalCreateWithoutClientInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedProposalCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyClientInputEnvelope)
    createMany?: DefinedProposalCreateManyClientInputEnvelope;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;
}
