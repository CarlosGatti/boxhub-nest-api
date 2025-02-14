import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueScalarWhereInput } from './facet-value-scalar-where.input';
import { Type } from 'class-transformer';
import { FacetValueUpdateManyMutationInput } from './facet-value-update-many-mutation.input';

@InputType()
export class FacetValueUpdateManyWithWhereWithoutFacetInput {

    @Field(() => FacetValueScalarWhereInput, {nullable:false})
    @Type(() => FacetValueScalarWhereInput)
    where!: FacetValueScalarWhereInput;

    @Field(() => FacetValueUpdateManyMutationInput, {nullable:false})
    @Type(() => FacetValueUpdateManyMutationInput)
    data!: FacetValueUpdateManyMutationInput;
}
