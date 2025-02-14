import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';
import { Type } from 'class-transformer';
import { FacetValueCreateInput } from './facet-value-create.input';
import { FacetValueUpdateInput } from './facet-value-update.input';

@ArgsType()
export class UpsertOneFacetValueArgs {

    @Field(() => FacetValueWhereUniqueInput, {nullable:false})
    @Type(() => FacetValueWhereUniqueInput)
    where!: Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>;

    @Field(() => FacetValueCreateInput, {nullable:false})
    @Type(() => FacetValueCreateInput)
    create!: FacetValueCreateInput;

    @Field(() => FacetValueUpdateInput, {nullable:false})
    @Type(() => FacetValueUpdateInput)
    update!: FacetValueUpdateInput;
}
