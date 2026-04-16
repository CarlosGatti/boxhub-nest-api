import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutAuthorInput } from './defined-internal-note-create-without-author.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutAuthorInput } from './defined-internal-note-create-or-connect-without-author.input';
import { DefinedInternalNoteCreateManyAuthorInputEnvelope } from './defined-internal-note-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';

@InputType()
export class DefinedInternalNoteUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [DefinedInternalNoteCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutAuthorInput)
    create?: Array<DefinedInternalNoteCreateWithoutAuthorInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutAuthorInput>;

    @Field(() => DefinedInternalNoteCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyAuthorInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyAuthorInputEnvelope;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;
}
