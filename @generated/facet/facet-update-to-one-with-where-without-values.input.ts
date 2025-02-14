import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';
import { Type } from 'class-transformer';
import { FacetUpdateWithoutValuesInput } from './facet-update-without-values.input';

@InputType()
export class FacetUpdateToOneWithWhereWithoutValuesInput {

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;

    @Field(() => FacetUpdateWithoutValuesInput, {nullable:false})
    @Type(() => FacetUpdateWithoutValuesInput)
    data!: FacetUpdateWithoutValuesInput;
}
