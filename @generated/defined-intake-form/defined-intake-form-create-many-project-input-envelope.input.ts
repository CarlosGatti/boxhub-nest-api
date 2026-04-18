import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateManyProjectInput } from './defined-intake-form-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedIntakeFormCreateManyProjectInputEnvelope {

    @Field(() => [DefinedIntakeFormCreateManyProjectInput], {nullable:false})
    @Type(() => DefinedIntakeFormCreateManyProjectInput)
    data!: Array<DefinedIntakeFormCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
