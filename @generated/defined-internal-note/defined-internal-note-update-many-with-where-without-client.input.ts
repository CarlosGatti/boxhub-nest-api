import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteScalarWhereInput } from './defined-internal-note-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteUpdateManyMutationInput } from './defined-internal-note-update-many-mutation.input';

@InputType()
export class DefinedInternalNoteUpdateManyWithWhereWithoutClientInput {

    @Field(() => DefinedInternalNoteScalarWhereInput, {nullable:false})
    @Type(() => DefinedInternalNoteScalarWhereInput)
    where!: DefinedInternalNoteScalarWhereInput;

    @Field(() => DefinedInternalNoteUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateManyMutationInput)
    data!: DefinedInternalNoteUpdateManyMutationInput;
}
