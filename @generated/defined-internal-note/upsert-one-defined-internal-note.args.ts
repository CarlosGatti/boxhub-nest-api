import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateInput } from './defined-internal-note-create.input';
import { DefinedInternalNoteUpdateInput } from './defined-internal-note-update.input';

@ArgsType()
export class UpsertOneDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteCreateInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateInput)
    create!: DefinedInternalNoteCreateInput;

    @Field(() => DefinedInternalNoteUpdateInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateInput)
    update!: DefinedInternalNoteUpdateInput;
}
