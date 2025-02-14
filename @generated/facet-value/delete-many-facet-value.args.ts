import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueWhereInput } from './facet-value-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFacetValueArgs {

    @Field(() => FacetValueWhereInput, {nullable:true})
    @Type(() => FacetValueWhereInput)
    where?: FacetValueWhereInput;
}
