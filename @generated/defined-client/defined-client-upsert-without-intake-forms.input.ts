import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutIntakeFormsInput } from './defined-client-update-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutIntakeFormsInput } from './defined-client-create-without-intake-forms.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutIntakeFormsInput {

    @Field(() => DefinedClientUpdateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutIntakeFormsInput)
    update!: DefinedClientUpdateWithoutIntakeFormsInput;

    @Field(() => DefinedClientCreateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutIntakeFormsInput)
    create!: DefinedClientCreateWithoutIntakeFormsInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
