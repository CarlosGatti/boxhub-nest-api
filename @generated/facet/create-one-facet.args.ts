import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetCreateInput } from './facet-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacetArgs {

    @Field(() => FacetCreateInput, {nullable:false})
    @Type(() => FacetCreateInput)
    data!: FacetCreateInput;
}
