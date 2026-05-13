import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutProjectInput } from './defined-proposal-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutProjectInput } from './defined-proposal-create-or-connect-without-project.input';
import { DefinedProposalCreateManyProjectInputEnvelope } from './defined-proposal-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@InputType()
export class DefinedProposalUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [DefinedProposalCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutProjectInput)
    create?: Array<DefinedProposalCreateWithoutProjectInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutProjectInput>;

    @Field(() => DefinedProposalCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyProjectInputEnvelope)
    createMany?: DefinedProposalCreateManyProjectInputEnvelope;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;
}
