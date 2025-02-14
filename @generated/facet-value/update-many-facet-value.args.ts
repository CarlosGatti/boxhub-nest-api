import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueUpdateManyMutationInput } from './facet-value-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FacetValueWhereInput } from './facet-value-where.input';

@ArgsType()
export class UpdateManyFacetValueArgs {

    @Field(() => FacetValueUpdateManyMutationInput, {nullable:false})
    @Type(() => FacetValueUpdateManyMutationInput)
    data!: FacetValueUpdateManyMutationInput;

    @Field(() => FacetValueWhereInput, {nullable:true})
    @Type(() => FacetValueWhereInput)
    where?: FacetValueWhereInput;
}
