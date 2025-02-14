import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';

@InputType()
export class FacetListRelationFilter {

    @Field(() => FacetWhereInput, {nullable:true})
    every?: FacetWhereInput;

    @Field(() => FacetWhereInput, {nullable:true})
    some?: FacetWhereInput;

    @Field(() => FacetWhereInput, {nullable:true})
    none?: FacetWhereInput;
}
