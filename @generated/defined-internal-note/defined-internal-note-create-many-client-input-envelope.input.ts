import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateManyClientInput } from './defined-internal-note-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteCreateManyClientInputEnvelope {

    @Field(() => [DefinedInternalNoteCreateManyClientInput], {nullable:false})
    @Type(() => DefinedInternalNoteCreateManyClientInput)
    data!: Array<DefinedInternalNoteCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
