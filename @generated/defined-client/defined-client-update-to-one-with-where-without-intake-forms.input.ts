import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutIntakeFormsInput } from './defined-client-update-without-intake-forms.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutIntakeFormsInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutIntakeFormsInput)
    data!: DefinedClientUpdateWithoutIntakeFormsInput;
}
