import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteUpdateWithoutClientInput } from './defined-internal-note-update-without-client.input';
import { DefinedInternalNoteCreateWithoutClientInput } from './defined-internal-note-create-without-client.input';

@InputType()
export class DefinedInternalNoteUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateWithoutClientInput)
    update!: DefinedInternalNoteUpdateWithoutClientInput;

    @Field(() => DefinedInternalNoteCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateWithoutClientInput)
    create!: DefinedInternalNoteCreateWithoutClientInput;
}
