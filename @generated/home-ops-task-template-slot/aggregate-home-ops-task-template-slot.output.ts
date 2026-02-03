import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCountAggregate } from './home-ops-task-template-slot-count-aggregate.output';
import { HomeOpsTaskTemplateSlotAvgAggregate } from './home-ops-task-template-slot-avg-aggregate.output';
import { HomeOpsTaskTemplateSlotSumAggregate } from './home-ops-task-template-slot-sum-aggregate.output';
import { HomeOpsTaskTemplateSlotMinAggregate } from './home-ops-task-template-slot-min-aggregate.output';
import { HomeOpsTaskTemplateSlotMaxAggregate } from './home-ops-task-template-slot-max-aggregate.output';

@ObjectType()
export class AggregateHomeOpsTaskTemplateSlot {

    @Field(() => HomeOpsTaskTemplateSlotCountAggregate, {nullable:true})
    _count?: HomeOpsTaskTemplateSlotCountAggregate;

    @Field(() => HomeOpsTaskTemplateSlotAvgAggregate, {nullable:true})
    _avg?: HomeOpsTaskTemplateSlotAvgAggregate;

    @Field(() => HomeOpsTaskTemplateSlotSumAggregate, {nullable:true})
    _sum?: HomeOpsTaskTemplateSlotSumAggregate;

    @Field(() => HomeOpsTaskTemplateSlotMinAggregate, {nullable:true})
    _min?: HomeOpsTaskTemplateSlotMinAggregate;

    @Field(() => HomeOpsTaskTemplateSlotMaxAggregate, {nullable:true})
    _max?: HomeOpsTaskTemplateSlotMaxAggregate;
}
