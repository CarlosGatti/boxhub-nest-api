import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueCreateInput } from './facet-value-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacetValueArgs {

    @Field(() => FacetValueCreateInput, {nullable:false})
    @Type(() => FacetValueCreateInput)
    data!: FacetValueCreateInput;
}
