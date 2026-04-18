import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateInput } from './defined-intake-form-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedIntakeFormArgs {

    @Field(() => DefinedIntakeFormCreateInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateInput)
    data!: DefinedIntakeFormCreateInput;
}
