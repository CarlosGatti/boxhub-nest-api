import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteUpdateManyMutationInput } from './defined-internal-note-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';

@ArgsType()
export class UpdateManyDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInternalNoteUpdateManyMutationInput)
    data!: DefinedInternalNoteUpdateManyMutationInput;

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    @Type(() => DefinedInternalNoteWhereInput)
    where?: DefinedInternalNoteWhereInput;
}
