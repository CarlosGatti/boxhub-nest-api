import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateNestedOneWithoutInternalNotesInput } from '../defined-client/defined-client-create-nested-one-without-internal-notes.input';
import { DefinedProjectCreateNestedOneWithoutInternalNotesInput } from '../defined-project/defined-project-create-nested-one-without-internal-notes.input';
import { UserCreateNestedOneWithoutDefinedInternalNotesInput } from '../user/user-create-nested-one-without-defined-internal-notes.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteCreateInput {

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedClientCreateNestedOneWithoutInternalNotesInput, {nullable:true})
    client?: DefinedClientCreateNestedOneWithoutInternalNotesInput;

    @Field(() => DefinedProjectCreateNestedOneWithoutInternalNotesInput, {nullable:true})
    project?: DefinedProjectCreateNestedOneWithoutInternalNotesInput;

    @Field(() => UserCreateNestedOneWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDefinedInternalNotesInput)
    author!: UserCreateNestedOneWithoutDefinedInternalNotesInput;
}
