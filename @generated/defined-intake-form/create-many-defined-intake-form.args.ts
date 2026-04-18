import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateManyInput } from './defined-intake-form-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedIntakeFormArgs {

    @Field(() => [DefinedIntakeFormCreateManyInput], {nullable:false})
    @Type(() => DefinedIntakeFormCreateManyInput)
    data!: Array<DefinedIntakeFormCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
