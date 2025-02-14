import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetCreateManyInput } from './facet-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacetArgs {

    @Field(() => [FacetCreateManyInput], {nullable:false})
    @Type(() => FacetCreateManyInput)
    data!: Array<FacetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
