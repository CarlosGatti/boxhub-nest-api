import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetUpdateWithoutValuesInput } from './facet-update-without-values.input';
import { Type } from 'class-transformer';
import { FacetCreateWithoutValuesInput } from './facet-create-without-values.input';
import { FacetWhereInput } from './facet-where.input';

@InputType()
export class FacetUpsertWithoutValuesInput {

    @Field(() => FacetUpdateWithoutValuesInput, {nullable:false})
    @Type(() => FacetUpdateWithoutValuesInput)
    update!: FacetUpdateWithoutValuesInput;

    @Field(() => FacetCreateWithoutValuesInput, {nullable:false})
    @Type(() => FacetCreateWithoutValuesInput)
    create!: FacetCreateWithoutValuesInput;

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;
}
