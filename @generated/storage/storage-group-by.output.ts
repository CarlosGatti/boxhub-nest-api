import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageCountAggregate } from './storage-count-aggregate.output';
import { StorageAvgAggregate } from './storage-avg-aggregate.output';
import { StorageSumAggregate } from './storage-sum-aggregate.output';
import { StorageMinAggregate } from './storage-min-aggregate.output';
import { StorageMaxAggregate } from './storage-max-aggregate.output';

@ObjectType()
export class StorageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => StorageCountAggregate, {nullable:true})
    _count?: StorageCountAggregate;

    @Field(() => StorageAvgAggregate, {nullable:true})
    _avg?: StorageAvgAggregate;

    @Field(() => StorageSumAggregate, {nullable:true})
    _sum?: StorageSumAggregate;

    @Field(() => StorageMinAggregate, {nullable:true})
    _min?: StorageMinAggregate;

    @Field(() => StorageMaxAggregate, {nullable:true})
    _max?: StorageMaxAggregate;
}
