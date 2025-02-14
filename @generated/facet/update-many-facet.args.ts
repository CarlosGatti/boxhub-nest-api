import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetUpdateManyMutationInput } from './facet-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacetWhereInput } from './facet-where.input';

@ArgsType()
export class UpdateManyFacetArgs {

    @Field(() => FacetUpdateManyMutationInput, {nullable:false})
    @Type(() => FacetUpdateManyMutationInput)
    data!: FacetUpdateManyMutationInput;

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;
}
