import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteUpdateWithoutAuthorInput } from './defined-internal-note-update-without-author.input';
import { DefinedInternalNoteCreateWithoutAuthorInput } from './defined-internal-note-create-without-author.input';

@InputType()
export class DefinedInternalNoteUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateWithoutAuthorInput)
    update!: DefinedInternalNoteUpdateWithoutAuthorInput;

    @Field(() => DefinedInternalNoteCreateWithoutAuthorInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateWithoutAuthorInput)
    create!: DefinedInternalNoteCreateWithoutAuthorInput;
}
