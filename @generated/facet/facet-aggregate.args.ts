import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';
import { Type } from 'class-transformer';
import { FacetOrderByWithRelationInput } from './facet-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacetWhereUniqueInput } from './facet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacetCountAggregateInput } from './facet-count-aggregate.input';
import { FacetAvgAggregateInput } from './facet-avg-aggregate.input';
import { FacetSumAggregateInput } from './facet-sum-aggregate.input';
import { FacetMinAggregateInput } from './facet-min-aggregate.input';
import { FacetMaxAggregateInput } from './facet-max-aggregate.input';

@ArgsType()
export class FacetAggregateArgs {

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

    @Field(() => FacetCountAggregateInput, {nullable:true})
    _count?: FacetCountAggregateInput;

    @Field(() => FacetAvgAggregateInput, {nullable:true})
    _avg?: FacetAvgAggregateInput;

    @Field(() => FacetSumAggregateInput, {nullable:true})
    _sum?: FacetSumAggregateInput;

    @Field(() => FacetMinAggregateInput, {nullable:true})
    _min?: FacetMinAggregateInput;

    @Field(() => FacetMaxAggregateInput, {nullable:true})
    _max?: FacetMaxAggregateInput;
}
