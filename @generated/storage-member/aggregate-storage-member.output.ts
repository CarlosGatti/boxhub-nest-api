import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StorageMemberCountAggregate } from './storage-member-count-aggregate.output';
import { StorageMemberAvgAggregate } from './storage-member-avg-aggregate.output';
import { StorageMemberSumAggregate } from './storage-member-sum-aggregate.output';
import { StorageMemberMinAggregate } from './storage-member-min-aggregate.output';
import { StorageMemberMaxAggregate } from './storage-member-max-aggregate.output';

@ObjectType()
export class AggregateStorageMember {

    @Field(() => StorageMemberCountAggregate, {nullable:true})
    _count?: StorageMemberCountAggregate;

    @Field(() => StorageMemberAvgAggregate, {nullable:true})
    _avg?: StorageMemberAvgAggregate;

    @Field(() => StorageMemberSumAggregate, {nullable:true})
    _sum?: StorageMemberSumAggregate;

    @Field(() => StorageMemberMinAggregate, {nullable:true})
    _min?: StorageMemberMinAggregate;

    @Field(() => StorageMemberMaxAggregate, {nullable:true})
    _max?: StorageMemberMaxAggregate;
}
