import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionOrderByWithRelationInput } from './defined-branding-section-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionCountAggregateInput } from './defined-branding-section-count-aggregate.input';
import { DefinedBrandingSectionAvgAggregateInput } from './defined-branding-section-avg-aggregate.input';
import { DefinedBrandingSectionSumAggregateInput } from './defined-branding-section-sum-aggregate.input';
import { DefinedBrandingSectionMinAggregateInput } from './defined-branding-section-min-aggregate.input';
import { DefinedBrandingSectionMaxAggregateInput } from './defined-branding-section-max-aggregate.input';

@ArgsType()
export class DefinedBrandingSectionAggregateArgs {

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    @Type(() => DefinedBrandingSectionWhereInput)
    where?: DefinedBrandingSectionWhereInput;

    @Field(() => [DefinedBrandingSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingSectionOrderByWithRelationInput>;

    @Field(() => DefinedBrandingSectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedBrandingSectionCountAggregateInput, {nullable:true})
    _count?: DefinedBrandingSectionCountAggregateInput;

    @Field(() => DefinedBrandingSectionAvgAggregateInput, {nullable:true})
    _avg?: DefinedBrandingSectionAvgAggregateInput;

    @Field(() => DefinedBrandingSectionSumAggregateInput, {nullable:true})
    _sum?: DefinedBrandingSectionSumAggregateInput;

    @Field(() => DefinedBrandingSectionMinAggregateInput, {nullable:true})
    _min?: DefinedBrandingSectionMinAggregateInput;

    @Field(() => DefinedBrandingSectionMaxAggregateInput, {nullable:true})
    _max?: DefinedBrandingSectionMaxAggregateInput;
}
