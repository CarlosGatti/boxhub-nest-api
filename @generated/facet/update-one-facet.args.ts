import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetUpdateInput } from './facet-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';

@ArgsType()
export class UpdateOneFacetArgs {

    @Field(() => FacetUpdateInput, {nullable:false})
    @Type(() => FacetUpdateInput)
    data!: FacetUpdateInput;

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;
}
