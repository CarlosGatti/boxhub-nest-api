import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueCreateManyFacetInput } from './facet-value-create-many-facet.input';
import { Type } from 'class-transformer';

@InputType()
export class FacetValueCreateManyFacetInputEnvelope {

    @Field(() => [FacetValueCreateManyFacetInput], {nullable:false})
    @Type(() => FacetValueCreateManyFacetInput)
    data!: Array<FacetValueCreateManyFacetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
