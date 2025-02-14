import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FollowsWhereInput } from './follows-where.input';
import { Type } from 'class-transformer';
import { FollowsOrderByWithRelationInput } from './follows-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FollowsWhereUniqueInput } from './follows-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FollowsCountAggregateInput } from './follows-count-aggregate.input';
import { FollowsAvgAggregateInput } from './follows-avg-aggregate.input';
import { FollowsSumAggregateInput } from './follows-sum-aggregate.input';
import { FollowsMinAggregateInput } from './follows-min-aggregate.input';
import { FollowsMaxAggregateInput } from './follows-max-aggregate.input';

@ArgsType()
export class FollowsAggregateArgs {

    @Field(() => FollowsWhereInput, {nullable:true})
    @Type(() => FollowsWhereInput)
    where?: FollowsWhereInput;

    @Field(() => [FollowsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FollowsOrderByWithRelationInput>;

    @Field(() => FollowsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FollowsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FollowsCountAggregateInput, {nullable:true})
    _count?: FollowsCountAggregateInput;

    @Field(() => FollowsAvgAggregateInput, {nullable:true})
    _avg?: FollowsAvgAggregateInput;

    @Field(() => FollowsSumAggregateInput, {nullable:true})
    _sum?: FollowsSumAggregateInput;

    @Field(() => FollowsMinAggregateInput, {nullable:true})
    _min?: FollowsMinAggregateInput;

    @Field(() => FollowsMaxAggregateInput, {nullable:true})
    _max?: FollowsMaxAggregateInput;
}
