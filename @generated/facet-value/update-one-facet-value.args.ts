import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueUpdateInput } from './facet-value-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';

@ArgsType()
export class UpdateOneFacetValueArgs {

    @Field(() => FacetValueUpdateInput, {nullable:false})
    @Type(() => FacetValueUpdateInput)
    data!: FacetValueUpdateInput;

    @Field(() => FacetValueWhereUniqueInput, {nullable:false})
    @Type(() => FacetValueWhereUniqueInput)
    where!: Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>;
}
