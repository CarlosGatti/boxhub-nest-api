import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteUpdateInput } from './defined-internal-note-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';

@ArgsType()
export class UpdateOneDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteUpdateInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateInput)
    data!: DefinedInternalNoteUpdateInput;

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;
}
