import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Community } from '../community/community.model';
import { FacetValue } from '../facet-value/facet-value.model';
import { FacetCount } from './facet-count.output';

@ObjectType()
export class Facet {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    communityId!: number | null;

    @Field(() => Community, {nullable:true})
    Community?: Community | null;

    @Field(() => [FacetValue], {nullable:true})
    values?: Array<FacetValue>;

    @Field(() => FacetCount, {nullable:false})
    _count?: FacetCount;
}
