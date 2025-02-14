import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PillarCountAggregate } from './pillar-count-aggregate.output';
import { PillarAvgAggregate } from './pillar-avg-aggregate.output';
import { PillarSumAggregate } from './pillar-sum-aggregate.output';
import { PillarMinAggregate } from './pillar-min-aggregate.output';
import { PillarMaxAggregate } from './pillar-max-aggregate.output';

@ObjectType()
export class PillarGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PillarCountAggregate, {nullable:true})
    _count?: PillarCountAggregate;

    @Field(() => PillarAvgAggregate, {nullable:true})
    _avg?: PillarAvgAggregate;

    @Field(() => PillarSumAggregate, {nullable:true})
    _sum?: PillarSumAggregate;

    @Field(() => PillarMinAggregate, {nullable:true})
    _min?: PillarMinAggregate;

    @Field(() => PillarMaxAggregate, {nullable:true})
    _max?: PillarMaxAggregate;
}
