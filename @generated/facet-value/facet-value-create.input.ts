import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateNestedOneWithoutValuesInput } from '../facet/facet-create-nested-one-without-values.input';

@InputType()
export class FacetValueCreateInput {

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FacetCreateNestedOneWithoutValuesInput, {nullable:true})
    Facet?: FacetCreateNestedOneWithoutValuesInput;
}
