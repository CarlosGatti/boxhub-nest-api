import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateManyAuthorInput } from './defined-internal-note-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteCreateManyAuthorInputEnvelope {

    @Field(() => [DefinedInternalNoteCreateManyAuthorInput], {nullable:false})
    @Type(() => DefinedInternalNoteCreateManyAuthorInput)
    data!: Array<DefinedInternalNoteCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
