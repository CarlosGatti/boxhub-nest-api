import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeScalarWhereInput } from './theme-scalar-where.input';
import { Type } from 'class-transformer';
import { ThemeUpdateManyMutationInput } from './theme-update-many-mutation.input';

@InputType()
export class ThemeUpdateManyWithWhereWithoutProcessInput {

    @Field(() => ThemeScalarWhereInput, {nullable:false})
    @Type(() => ThemeScalarWhereInput)
    where!: ThemeScalarWhereInput;

    @Field(() => ThemeUpdateManyMutationInput, {nullable:false})
    @Type(() => ThemeUpdateManyMutationInput)
    data!: ThemeUpdateManyMutationInput;
}
