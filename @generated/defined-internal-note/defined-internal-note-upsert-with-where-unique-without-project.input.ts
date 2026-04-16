import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteUpdateWithoutProjectInput } from './defined-internal-note-update-without-project.input';
import { DefinedInternalNoteCreateWithoutProjectInput } from './defined-internal-note-create-without-project.input';

@InputType()
export class DefinedInternalNoteUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateWithoutProjectInput)
    update!: DefinedInternalNoteUpdateWithoutProjectInput;

    @Field(() => DefinedInternalNoteCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateWithoutProjectInput)
    create!: DefinedInternalNoteCreateWithoutProjectInput;
}
