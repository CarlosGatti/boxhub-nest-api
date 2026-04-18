import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutIntakeFormsInput } from './defined-project-update-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutIntakeFormsInput } from './defined-project-create-without-intake-forms.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutIntakeFormsInput {

    @Field(() => DefinedProjectUpdateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutIntakeFormsInput)
    update!: DefinedProjectUpdateWithoutIntakeFormsInput;

    @Field(() => DefinedProjectCreateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutIntakeFormsInput)
    create!: DefinedProjectCreateWithoutIntakeFormsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
