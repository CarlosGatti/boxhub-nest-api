import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueCreateManyInput } from './facet-value-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacetValueArgs {

    @Field(() => [FacetValueCreateManyInput], {nullable:false})
    @Type(() => FacetValueCreateManyInput)
    data!: Array<FacetValueCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
