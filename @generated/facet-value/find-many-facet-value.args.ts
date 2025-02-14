import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueWhereInput } from './facet-value-where.input';
import { Type } from 'class-transformer';
import { FacetValueOrderByWithRelationInput } from './facet-value-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacetValueScalarFieldEnum } from './facet-value-scalar-field.enum';

@ArgsType()
export class FindManyFacetValueArgs {

    @Field(() => FacetValueWhereInput, {nullable:true})
    @Type(() => FacetValueWhereInput)
    where?: FacetValueWhereInput;

    @Field(() => [FacetValueOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacetValueOrderByWithRelationInput>;

    @Field(() => FacetValueWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacetValueScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FacetValueScalarFieldEnum>;
}
