import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermitInspectionCountAggregate } from './permit-inspection-count-aggregate.output';
import { PermitInspectionAvgAggregate } from './permit-inspection-avg-aggregate.output';
import { PermitInspectionSumAggregate } from './permit-inspection-sum-aggregate.output';
import { PermitInspectionMinAggregate } from './permit-inspection-min-aggregate.output';
import { PermitInspectionMaxAggregate } from './permit-inspection-max-aggregate.output';

@ObjectType()
export class AggregatePermitInspection {

    @Field(() => PermitInspectionCountAggregate, {nullable:true})
    _count?: PermitInspectionCountAggregate;

    @Field(() => PermitInspectionAvgAggregate, {nullable:true})
    _avg?: PermitInspectionAvgAggregate;

    @Field(() => PermitInspectionSumAggregate, {nullable:true})
    _sum?: PermitInspectionSumAggregate;

    @Field(() => PermitInspectionMinAggregate, {nullable:true})
    _min?: PermitInspectionMinAggregate;

    @Field(() => PermitInspectionMaxAggregate, {nullable:true})
    _max?: PermitInspectionMaxAggregate;
}
