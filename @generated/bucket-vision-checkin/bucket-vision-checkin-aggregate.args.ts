import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinOrderByWithRelationInput } from './bucket-vision-checkin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionCheckinCountAggregateInput } from './bucket-vision-checkin-count-aggregate.input';
import { BucketVisionCheckinAvgAggregateInput } from './bucket-vision-checkin-avg-aggregate.input';
import { BucketVisionCheckinSumAggregateInput } from './bucket-vision-checkin-sum-aggregate.input';
import { BucketVisionCheckinMinAggregateInput } from './bucket-vision-checkin-min-aggregate.input';
import { BucketVisionCheckinMaxAggregateInput } from './bucket-vision-checkin-max-aggregate.input';

@ArgsType()
export class BucketVisionCheckinAggregateArgs {

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    @Type(() => BucketVisionCheckinWhereInput)
    where?: BucketVisionCheckinWhereInput;

    @Field(() => [BucketVisionCheckinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionCheckinOrderByWithRelationInput>;

    @Field(() => BucketVisionCheckinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionCheckinCountAggregateInput, {nullable:true})
    _count?: BucketVisionCheckinCountAggregateInput;

    @Field(() => BucketVisionCheckinAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionCheckinAvgAggregateInput;

    @Field(() => BucketVisionCheckinSumAggregateInput, {nullable:true})
    _sum?: BucketVisionCheckinSumAggregateInput;

    @Field(() => BucketVisionCheckinMinAggregateInput, {nullable:true})
    _min?: BucketVisionCheckinMinAggregateInput;

    @Field(() => BucketVisionCheckinMaxAggregateInput, {nullable:true})
    _max?: BucketVisionCheckinMaxAggregateInput;
}
