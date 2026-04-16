import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutInternalNotesInput } from './defined-project-update-without-internal-notes.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutInternalNotesInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutInternalNotesInput)
    data!: DefinedProjectUpdateWithoutInternalNotesInput;
}
