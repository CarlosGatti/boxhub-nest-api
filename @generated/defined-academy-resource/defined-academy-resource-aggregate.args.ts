import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceOrderByWithRelationInput } from './defined-academy-resource-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceCountAggregateInput } from './defined-academy-resource-count-aggregate.input';
import { DefinedAcademyResourceAvgAggregateInput } from './defined-academy-resource-avg-aggregate.input';
import { DefinedAcademyResourceSumAggregateInput } from './defined-academy-resource-sum-aggregate.input';
import { DefinedAcademyResourceMinAggregateInput } from './defined-academy-resource-min-aggregate.input';
import { DefinedAcademyResourceMaxAggregateInput } from './defined-academy-resource-max-aggregate.input';

@ArgsType()
export class DefinedAcademyResourceAggregateArgs {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => [DefinedAcademyResourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyResourceOrderByWithRelationInput>;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyResourceCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyResourceCountAggregateInput;

    @Field(() => DefinedAcademyResourceAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyResourceAvgAggregateInput;

    @Field(() => DefinedAcademyResourceSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyResourceSumAggregateInput;

    @Field(() => DefinedAcademyResourceMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyResourceMinAggregateInput;

    @Field(() => DefinedAcademyResourceMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyResourceMaxAggregateInput;
}
