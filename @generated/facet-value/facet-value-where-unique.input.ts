import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FacetValueWhereInput } from './facet-value-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FacetNullableRelationFilter } from '../facet/facet-nullable-relation-filter.input';

@InputType()
export class FacetValueWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [FacetValueWhereInput], {nullable:true})
    AND?: Array<FacetValueWhereInput>;

    @Field(() => [FacetValueWhereInput], {nullable:true})
    OR?: Array<FacetValueWhereInput>;

    @Field(() => [FacetValueWhereInput], {nullable:true})
    NOT?: Array<FacetValueWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    facetId?: IntNullableFilter;

    @Field(() => FacetNullableRelationFilter, {nullable:true})
    Facet?: FacetNullableRelationFilter;
}
