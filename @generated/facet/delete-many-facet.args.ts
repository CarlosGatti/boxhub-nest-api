import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFacetArgs {

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;
}
