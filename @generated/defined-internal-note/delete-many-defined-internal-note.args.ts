import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    @Type(() => DefinedInternalNoteWhereInput)
    where?: DefinedInternalNoteWhereInput;
}
