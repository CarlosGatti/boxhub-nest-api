import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteUpdateWithoutProjectInput } from './defined-internal-note-update-without-project.input';

@InputType()
export class DefinedInternalNoteUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateWithoutProjectInput)
    data!: DefinedInternalNoteUpdateWithoutProjectInput;
}
