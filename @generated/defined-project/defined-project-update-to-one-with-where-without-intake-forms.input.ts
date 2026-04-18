import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutIntakeFormsInput } from './defined-project-update-without-intake-forms.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutIntakeFormsInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutIntakeFormsInput)
    data!: DefinedProjectUpdateWithoutIntakeFormsInput;
}
