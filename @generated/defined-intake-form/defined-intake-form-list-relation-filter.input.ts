import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';

@InputType()
export class DefinedIntakeFormListRelationFilter {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    every?: DefinedIntakeFormWhereInput;

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    some?: DefinedIntakeFormWhereInput;

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    none?: DefinedIntakeFormWhereInput;
}
