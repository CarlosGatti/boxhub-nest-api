import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FacetValueUncheckedCreateNestedManyWithoutFacetInput } from '../facet-value/facet-value-unchecked-create-nested-many-without-facet.input';

@InputType()
export class FacetUncheckedCreateWithoutCommunityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FacetValueUncheckedCreateNestedManyWithoutFacetInput, {nullable:true})
    values?: FacetValueUncheckedCreateNestedManyWithoutFacetInput;
}
