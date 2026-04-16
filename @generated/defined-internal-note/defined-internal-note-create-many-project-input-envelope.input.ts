import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateManyProjectInput } from './defined-internal-note-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteCreateManyProjectInputEnvelope {

    @Field(() => [DefinedInternalNoteCreateManyProjectInput], {nullable:false})
    @Type(() => DefinedInternalNoteCreateManyProjectInput)
    data!: Array<DefinedInternalNoteCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
