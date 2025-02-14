import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FamilyCountAggregate } from './family-count-aggregate.output';
import { FamilyAvgAggregate } from './family-avg-aggregate.output';
import { FamilySumAggregate } from './family-sum-aggregate.output';
import { FamilyMinAggregate } from './family-min-aggregate.output';
import { FamilyMaxAggregate } from './family-max-aggregate.output';

@ObjectType()
export class AggregateFamily {

    @Field(() => FamilyCountAggregate, {nullable:true})
    _count?: FamilyCountAggregate;

    @Field(() => FamilyAvgAggregate, {nullable:true})
    _avg?: FamilyAvgAggregate;

    @Field(() => FamilySumAggregate, {nullable:true})
    _sum?: FamilySumAggregate;

    @Field(() => FamilyMinAggregate, {nullable:true})
    _min?: FamilyMinAggregate;

    @Field(() => FamilyMaxAggregate, {nullable:true})
    _max?: FamilyMaxAggregate;
}
