import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateNestedOneWithoutInternalNotesInput } from '../defined-project/defined-project-create-nested-one-without-internal-notes.input';
import { UserCreateNestedOneWithoutDefinedInternalNotesInput } from '../user/user-create-nested-one-without-defined-internal-notes.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteCreateWithoutClientInput {

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedProjectCreateNestedOneWithoutInternalNotesInput, {nullable:true})
    project?: DefinedProjectCreateNestedOneWithoutInternalNotesInput;

    @Field(() => UserCreateNestedOneWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDefinedInternalNotesInput)
    author!: UserCreateNestedOneWithoutDefinedInternalNotesInput;
}
