import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateManyClientInput } from './defined-intake-form-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedIntakeFormCreateManyClientInputEnvelope {

    @Field(() => [DefinedIntakeFormCreateManyClientInput], {nullable:false})
    @Type(() => DefinedIntakeFormCreateManyClientInput)
    data!: Array<DefinedIntakeFormCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
