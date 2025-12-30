import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AssetCountAggregate } from './asset-count-aggregate.output';
import { AssetAvgAggregate } from './asset-avg-aggregate.output';
import { AssetSumAggregate } from './asset-sum-aggregate.output';
import { AssetMinAggregate } from './asset-min-aggregate.output';
import { AssetMaxAggregate } from './asset-max-aggregate.output';

@ObjectType()
export class AssetGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => AssetType, {nullable:false})
    type!: keyof typeof AssetType;

    @Field(() => String, {nullable:true})
    ticker?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:true})
    exchange?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AssetCountAggregate, {nullable:true})
    _count?: AssetCountAggregate;

    @Field(() => AssetAvgAggregate, {nullable:true})
    _avg?: AssetAvgAggregate;

    @Field(() => AssetSumAggregate, {nullable:true})
    _sum?: AssetSumAggregate;

    @Field(() => AssetMinAggregate, {nullable:true})
    _min?: AssetMinAggregate;

    @Field(() => AssetMaxAggregate, {nullable:true})
    _max?: AssetMaxAggregate;
}
