import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RefreshTokenCountAggregate } from './refresh-token-count-aggregate.output';
import { RefreshTokenAvgAggregate } from './refresh-token-avg-aggregate.output';
import { RefreshTokenSumAggregate } from './refresh-token-sum-aggregate.output';
import { RefreshTokenMinAggregate } from './refresh-token-min-aggregate.output';
import { RefreshTokenMaxAggregate } from './refresh-token-max-aggregate.output';

@ObjectType()
export class AggregateRefreshToken {

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
