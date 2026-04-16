import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateInput } from './defined-internal-note-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteCreateInput, {nullable:false})
    @Type(() => DefinedInternalNoteCreateInput)
    data!: DefinedInternalNoteCreateInput;
}
