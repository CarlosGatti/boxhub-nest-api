import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutClientInput } from './defined-internal-note-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutClientInput } from './defined-internal-note-create-or-connect-without-client.input';
import { DefinedInternalNoteCreateManyClientInputEnvelope } from './defined-internal-note-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';

@InputType()
export class DefinedInternalNoteCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedInternalNoteCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutClientInput)
    create?: Array<DefinedInternalNoteCreateWithoutClientInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedInternalNoteCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyClientInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyClientInputEnvelope;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;
}
