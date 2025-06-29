import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MaterialEntryCountAggregate } from './material-entry-count-aggregate.output';
import { MaterialEntryAvgAggregate } from './material-entry-avg-aggregate.output';
import { MaterialEntrySumAggregate } from './material-entry-sum-aggregate.output';
import { MaterialEntryMinAggregate } from './material-entry-min-aggregate.output';
import { MaterialEntryMaxAggregate } from './material-entry-max-aggregate.output';

@ObjectType()
export class AggregateMaterialEntry {

    @Field(() => MaterialEntryCountAggregate, {nullable:true})
    _count?: MaterialEntryCountAggregate;

    @Field(() => MaterialEntryAvgAggregate, {nullable:true})
    _avg?: MaterialEntryAvgAggregate;

    @Field(() => MaterialEntrySumAggregate, {nullable:true})
    _sum?: MaterialEntrySumAggregate;

    @Field(() => MaterialEntryMinAggregate, {nullable:true})
    _min?: MaterialEntryMinAggregate;

    @Field(() => MaterialEntryMaxAggregate, {nullable:true})
    _max?: MaterialEntryMaxAggregate;
}
