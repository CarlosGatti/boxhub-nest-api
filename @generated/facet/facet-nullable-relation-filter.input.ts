import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';

@InputType()
export class FacetNullableRelationFilter {

    @Field(() => FacetWhereInput, {nullable:true})
    is?: FacetWhereInput;

    @Field(() => FacetWhereInput, {nullable:true})
    isNot?: FacetWhereInput;
}
