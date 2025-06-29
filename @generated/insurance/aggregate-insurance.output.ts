import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InsuranceCountAggregate } from './insurance-count-aggregate.output';
import { InsuranceAvgAggregate } from './insurance-avg-aggregate.output';
import { InsuranceSumAggregate } from './insurance-sum-aggregate.output';
import { InsuranceMinAggregate } from './insurance-min-aggregate.output';
import { InsuranceMaxAggregate } from './insurance-max-aggregate.output';

@ObjectType()
export class AggregateInsurance {

    @Field(() => InsuranceCountAggregate, {nullable:true})
    _count?: InsuranceCountAggregate;

    @Field(() => InsuranceAvgAggregate, {nullable:true})
    _avg?: InsuranceAvgAggregate;

    @Field(() => InsuranceSumAggregate, {nullable:true})
    _sum?: InsuranceSumAggregate;

    @Field(() => InsuranceMinAggregate, {nullable:true})
    _min?: InsuranceMinAggregate;

    @Field(() => InsuranceMaxAggregate, {nullable:true})
    _max?: InsuranceMaxAggregate;
}
