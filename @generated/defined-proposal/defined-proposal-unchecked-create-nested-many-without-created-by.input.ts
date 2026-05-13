import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutCreatedByInput } from './defined-proposal-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutCreatedByInput } from './defined-proposal-create-or-connect-without-created-by.input';
import { DefinedProposalCreateManyCreatedByInputEnvelope } from './defined-proposal-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@InputType()
export class DefinedProposalUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DefinedProposalCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutCreatedByInput)
    create?: Array<DefinedProposalCreateWithoutCreatedByInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DefinedProposalCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyCreatedByInputEnvelope)
    createMany?: DefinedProposalCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedProposalWhereUniqueInput], {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>>;
}
