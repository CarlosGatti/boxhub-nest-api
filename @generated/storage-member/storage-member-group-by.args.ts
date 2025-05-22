import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { Type } from 'class-transformer';
import { StorageMemberOrderByWithAggregationInput } from './storage-member-order-by-with-aggregation.input';
import { StorageMemberScalarFieldEnum } from './storage-member-scalar-field.enum';
import { StorageMemberScalarWhereWithAggregatesInput } from './storage-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StorageMemberCountAggregateInput } from './storage-member-count-aggregate.input';
import { StorageMemberAvgAggregateInput } from './storage-member-avg-aggregate.input';
import { StorageMemberSumAggregateInput } from './storage-member-sum-aggregate.input';
import { StorageMemberMinAggregateInput } from './storage-member-min-aggregate.input';
import { StorageMemberMaxAggregateInput } from './storage-member-max-aggregate.input';

@ArgsType()
export class StorageMemberGroupByArgs {

    @Field(() => StorageMemberWhereInput, {nullable:true})
    @Type(() => StorageMemberWhereInput)
    where?: StorageMemberWhereInput;

    @Field(() => [StorageMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StorageMemberOrderByWithAggregationInput>;

    @Field(() => [StorageMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StorageMemberScalarFieldEnum>;

    @Field(() => StorageMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: StorageMemberScalarWhereWithAggregatesInput;

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
