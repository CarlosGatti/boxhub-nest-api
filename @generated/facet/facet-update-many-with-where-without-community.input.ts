import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetScalarWhereInput } from './facet-scalar-where.input';
import { Type } from 'class-transformer';
import { FacetUpdateManyMutationInput } from './facet-update-many-mutation.input';

@InputType()
export class FacetUpdateManyWithWhereWithoutCommunityInput {

    @Field(() => FacetScalarWhereInput, {nullable:false})
    @Type(() => FacetScalarWhereInput)
    where!: FacetScalarWhereInput;

    @Field(() => FacetUpdateManyMutationInput, {nullable:false})
    @Type(() => FacetUpdateManyMutationInput)
    data!: FacetUpdateManyMutationInput;
}
