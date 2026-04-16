import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutProjectInput } from './defined-internal-note-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutProjectInput } from './defined-internal-note-create-or-connect-without-project.input';
import { DefinedInternalNoteCreateManyProjectInputEnvelope } from './defined-internal-note-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';

@InputType()
export class DefinedInternalNoteCreateNestedManyWithoutProjectInput {

    @Field(() => [DefinedInternalNoteCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutProjectInput)
    create?: Array<DefinedInternalNoteCreateWithoutProjectInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutProjectInput>;

    @Field(() => DefinedInternalNoteCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyProjectInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyProjectInputEnvelope;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;
}
