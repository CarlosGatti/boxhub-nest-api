import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Type } from 'class-transformer';
import { FacetCreateInput } from './facet-create.input';
import { FacetUpdateInput } from './facet-update.input';

@ArgsType()
export class UpsertOneFacetArgs {

    @Field(() => FacetWhereUniqueInput, {nullable:false})
    @Type(() => FacetWhereUniqueInput)
    where!: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => FacetCreateInput, {nullable:false})
    @Type(() => FacetCreateInput)
    create!: FacetCreateInput;

    @Field(() => FacetUpdateInput, {nullable:false})
    @Type(() => FacetUpdateInput)
    update!: FacetUpdateInput;
}
