import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutCreatedByInput } from './defined-proposal-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutCreatedByInput } from './defined-proposal-create-or-connect-without-created-by.input';
import { DefinedProposalUpsertWithWhereUniqueWithoutCreatedByInput } from './defined-proposal-upsert-with-where-unique-without-created-by.input';
import { DefinedProposalCreateManyCreatedByInputEnvelope } from './defined-proposal-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { DefinedProposalUpdateWithWhereUniqueWithoutCreatedByInput } from './defined-proposal-update-with-where-unique-without-created-by.input';
import { DefinedProposalUpdateManyWithWhereWithoutCreatedByInput } from './defined-proposal-update-many-with-where-without-created-by.input';
import { DefinedProposalScalarWhereInput } from './defined-proposal-scalar-where.input';

@InputType()
export class DefinedProposalUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DefinedProposalCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutCreatedByInput)
    create?: Array<DefinedProposalCreateWithoutCreatedByInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DefinedProposalUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DefinedProposalUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DefinedProposalCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyCreatedByInputEnvelope)
    createMany?: DefinedProposalCreateManyCreatedByInputEnvelope;

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

    @Field(() => [DefinedProposalUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DefinedProposalUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DefinedProposalUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedProposalUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DefinedProposalUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalScalarWhereInput)
    deleteMany?: Array<DefinedProposalScalarWhereInput>;
}
