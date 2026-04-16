import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutInternalNotesInput } from './defined-client-update-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutInternalNotesInput } from './defined-client-create-without-internal-notes.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutInternalNotesInput {

    @Field(() => DefinedClientUpdateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutInternalNotesInput)
    update!: DefinedClientUpdateWithoutInternalNotesInput;

    @Field(() => DefinedClientCreateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutInternalNotesInput)
    create!: DefinedClientCreateWithoutInternalNotesInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
