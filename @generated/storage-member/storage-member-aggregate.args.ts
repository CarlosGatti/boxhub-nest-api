import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { Type } from 'class-transformer';
import { StorageMemberOrderByWithRelationInput } from './storage-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StorageMemberCountAggregateInput } from './storage-member-count-aggregate.input';
import { StorageMemberAvgAggregateInput } from './storage-member-avg-aggregate.input';
import { StorageMemberSumAggregateInput } from './storage-member-sum-aggregate.input';
import { StorageMemberMinAggregateInput } from './storage-member-min-aggregate.input';
import { StorageMemberMaxAggregateInput } from './storage-member-max-aggregate.input';

@ArgsType()
export class StorageMemberAggregateArgs {

    @Field(() => StorageMemberWhereInput, {nullable:true})
    @Type(() => StorageMemberWhereInput)
    where?: StorageMemberWhereInput;

    @Field(() => [StorageMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StorageMemberOrderByWithRelationInput>;

    @Field(() => StorageMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StorageMemberCountAggregateInput, {nullable:true})
    _count?: StorageMemberCountAggregateInput;

    @Field(() => StorageMemberAvgAggregateInput, {nullable:true})
    _avg?: StorageMemberAvgAggregateInput;

    @Field(() => StorageMemberSumAggregateInput, {nullable:true})
    _sum?: StorageMemberSumAggregateInput;

    @Field(() => StorageMemberMinAggregateInput, {nullable:true})
    _min?: StorageMemberMinAggregateInput;

    @Field(() => StorageMemberMaxAggregateInput, {nullable:true})
    _max?: StorageMemberMaxAggregateInput;
}
