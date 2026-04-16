import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutInternalNotesInput } from './defined-project-update-without-internal-notes.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutInternalNotesInput } from './defined-project-create-without-internal-notes.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutInternalNotesInput {

    @Field(() => DefinedProjectUpdateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutInternalNotesInput)
    update!: DefinedProjectUpdateWithoutInternalNotesInput;

    @Field(() => DefinedProjectCreateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutInternalNotesInput)
    create!: DefinedProjectCreateWithoutInternalNotesInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
