import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageRole } from '../prisma/storage-role.enum';
import { StorageMemberCountAggregate } from './storage-member-count-aggregate.output';
import { StorageMemberAvgAggregate } from './storage-member-avg-aggregate.output';
import { StorageMemberSumAggregate } from './storage-member-sum-aggregate.output';
import { StorageMemberMinAggregate } from './storage-member-min-aggregate.output';
import { StorageMemberMaxAggregate } from './storage-member-max-aggregate.output';

@ObjectType()
export class StorageMemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    storageId!: number;

    @Field(() => StorageRole, {nullable:false})
    role!: keyof typeof StorageRole;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
