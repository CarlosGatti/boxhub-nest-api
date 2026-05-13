import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutProjectInput } from './defined-proposal-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutProjectInput } from './defined-proposal-create-or-connect-without-project.input';
import { DefinedProposalUpsertWithWhereUniqueWithoutProjectInput } from './defined-proposal-upsert-with-where-unique-without-project.input';
import { DefinedProposalCreateManyProjectInputEnvelope } from './defined-proposal-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { DefinedProposalUpdateWithWhereUniqueWithoutProjectInput } from './defined-proposal-update-with-where-unique-without-project.input';
import { DefinedProposalUpdateManyWithWhereWithoutProjectInput } from './defined-proposal-update-many-with-where-without-project.input';
import { DefinedProposalScalarWhereInput } from './defined-proposal-scalar-where.input';

@InputType()
export class DefinedProposalUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [DefinedProposalCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalCreateWithoutProjectInput)
    create?: Array<DefinedProposalCreateWithoutProjectInput>;

    @Field(() => [DefinedProposalCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedProposalCreateOrConnectWithoutProjectInput>;

    @Field(() => [DefinedProposalUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<DefinedProposalUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => DefinedProposalCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedProposalCreateManyProjectInputEnvelope)
    createMany?: DefinedProposalCreateManyProjectInputEnvelope;

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

    @Field(() => [DefinedProposalUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<DefinedProposalUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [DefinedProposalUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => DefinedProposalUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<DefinedProposalUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [DefinedProposalScalarWhereInput], {nullable:true})
    @Type(() => DefinedProposalScalarWhereInput)
    deleteMany?: Array<DefinedProposalScalarWhereInput>;
}
