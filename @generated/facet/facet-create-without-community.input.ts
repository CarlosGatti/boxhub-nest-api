import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueCreateNestedManyWithoutFacetInput } from '../facet-value/facet-value-create-nested-many-without-facet.input';

@InputType()
export class FacetCreateWithoutCommunityInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FacetValueCreateNestedManyWithoutFacetInput, {nullable:true})
    values?: FacetValueCreateNestedManyWithoutFacetInput;
}
