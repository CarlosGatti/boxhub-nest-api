import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueWhereInput } from './facet-value-where.input';

@InputType()
export class FacetValueListRelationFilter {

    @Field(() => FacetValueWhereInput, {nullable:true})
    every?: FacetValueWhereInput;

    @Field(() => FacetValueWhereInput, {nullable:true})
    some?: FacetValueWhereInput;

    @Field(() => FacetValueWhereInput, {nullable:true})
    none?: FacetValueWhereInput;
}
