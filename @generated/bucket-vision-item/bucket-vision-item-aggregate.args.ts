import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';
import { Type } from 'class-transformer';
import { BucketVisionItemOrderByWithRelationInput } from './bucket-vision-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemCountAggregateInput } from './bucket-vision-item-count-aggregate.input';
import { BucketVisionItemAvgAggregateInput } from './bucket-vision-item-avg-aggregate.input';
import { BucketVisionItemSumAggregateInput } from './bucket-vision-item-sum-aggregate.input';
import { BucketVisionItemMinAggregateInput } from './bucket-vision-item-min-aggregate.input';
import { BucketVisionItemMaxAggregateInput } from './bucket-vision-item-max-aggregate.input';

@ArgsType()
export class BucketVisionItemAggregateArgs {

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    @Type(() => BucketVisionItemWhereInput)
    where?: BucketVisionItemWhereInput;

    @Field(() => [BucketVisionItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionItemOrderByWithRelationInput>;

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionItemCountAggregateInput, {nullable:true})
    _count?: BucketVisionItemCountAggregateInput;

    @Field(() => BucketVisionItemAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionItemAvgAggregateInput;

    @Field(() => BucketVisionItemSumAggregateInput, {nullable:true})
    _sum?: BucketVisionItemSumAggregateInput;

    @Field(() => BucketVisionItemMinAggregateInput, {nullable:true})
    _min?: BucketVisionItemMinAggregateInput;

    @Field(() => BucketVisionItemMaxAggregateInput, {nullable:true})
    _max?: BucketVisionItemMaxAggregateInput;
}
