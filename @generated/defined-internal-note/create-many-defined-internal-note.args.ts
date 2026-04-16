import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateManyInput } from './defined-internal-note-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedInternalNoteArgs {

    @Field(() => [DefinedInternalNoteCreateManyInput], {nullable:false})
    @Type(() => DefinedInternalNoteCreateManyInput)
    data!: Array<DefinedInternalNoteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
