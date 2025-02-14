import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';
import { Type } from 'class-transformer';
import { FacetOrderByWithRelationInput } from './facet-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacetScalarFieldEnum } from './facet-scalar-field.enum';

@ArgsType()
export class FindFirstFacetArgs {

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;

    @Field(() => [FacetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacetOrderByWithRelationInput>;

    @Field(() => FacetWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacetWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FacetScalarFieldEnum>;
}
