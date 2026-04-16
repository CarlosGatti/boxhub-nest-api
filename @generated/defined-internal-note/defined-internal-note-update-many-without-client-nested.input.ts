import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutClientInput } from './defined-internal-note-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutClientInput } from './defined-internal-note-create-or-connect-without-client.input';
import { DefinedInternalNoteUpsertWithWhereUniqueWithoutClientInput } from './defined-internal-note-upsert-with-where-unique-without-client.input';
import { DefinedInternalNoteCreateManyClientInputEnvelope } from './defined-internal-note-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { DefinedInternalNoteUpdateWithWhereUniqueWithoutClientInput } from './defined-internal-note-update-with-where-unique-without-client.input';
import { DefinedInternalNoteUpdateManyWithWhereWithoutClientInput } from './defined-internal-note-update-many-with-where-without-client.input';
import { DefinedInternalNoteScalarWhereInput } from './defined-internal-note-scalar-where.input';

@InputType()
export class DefinedInternalNoteUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedInternalNoteCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutClientInput)
    create?: Array<DefinedInternalNoteCreateWithoutClientInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedInternalNoteUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedInternalNoteUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedInternalNoteCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyClientInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyClientInputEnvelope;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedInternalNoteUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedInternalNoteUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedInternalNoteUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    @Type(() => DefinedInternalNoteScalarWhereInput)
    deleteMany?: Array<DefinedInternalNoteScalarWhereInput>;
}
