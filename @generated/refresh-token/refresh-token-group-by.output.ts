import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RefreshTokenCountAggregate } from './refresh-token-count-aggregate.output';
import { RefreshTokenAvgAggregate } from './refresh-token-avg-aggregate.output';
import { RefreshTokenSumAggregate } from './refresh-token-sum-aggregate.output';
import { RefreshTokenMinAggregate } from './refresh-token-min-aggregate.output';
import { RefreshTokenMaxAggregate } from './refresh-token-max-aggregate.output';

@ObjectType()
export class RefreshTokenGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => RefreshTokenCountAggregate, {nullable:true})
    _count?: RefreshTokenCountAggregate;

    @Field(() => RefreshTokenAvgAggregate, {nullable:true})
    _avg?: RefreshTokenAvgAggregate;

    @Field(() => RefreshTokenSumAggregate, {nullable:true})
    _sum?: RefreshTokenSumAggregate;

    @Field(() => RefreshTokenMinAggregate, {nullable:true})
    _min?: RefreshTokenMinAggregate;

    @Field(() => RefreshTokenMaxAggregate, {nullable:true})
    _max?: RefreshTokenMaxAggregate;
}
