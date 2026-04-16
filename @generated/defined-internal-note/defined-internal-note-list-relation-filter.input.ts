import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';

@InputType()
export class DefinedInternalNoteListRelationFilter {

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    every?: DefinedInternalNoteWhereInput;

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    some?: DefinedInternalNoteWhereInput;

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    none?: DefinedInternalNoteWhereInput;
}
