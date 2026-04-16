import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedClientCountAggregate } from './defined-client-count-aggregate.output';
import { DefinedClientAvgAggregate } from './defined-client-avg-aggregate.output';
import { DefinedClientSumAggregate } from './defined-client-sum-aggregate.output';
import { DefinedClientMinAggregate } from './defined-client-min-aggregate.output';
import { DefinedClientMaxAggregate } from './defined-client-max-aggregate.output';

@ObjectType()
export class AggregateDefinedClient {

    @Field(() => DefinedClientCountAggregate, {nullable:true})
    _count?: DefinedClientCountAggregate;

    @Field(() => DefinedClientAvgAggregate, {nullable:true})
    _avg?: DefinedClientAvgAggregate;

    @Field(() => DefinedClientSumAggregate, {nullable:true})
    _sum?: DefinedClientSumAggregate;

    @Field(() => DefinedClientMinAggregate, {nullable:true})
    _min?: DefinedClientMinAggregate;

    @Field(() => DefinedClientMaxAggregate, {nullable:true})
    _max?: DefinedClientMaxAggregate;
}
