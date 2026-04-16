import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateWithoutProjectInput } from './defined-internal-note-create-without-project.input';

@InputType()
export class DefinedInternalNoteCreateOrConnectWithoutProjectInput {

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => DefinedInternalNoteCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateWithoutProjectInput)
    create!: DefinedInternalNoteCreateWithoutProjectInput;
}
