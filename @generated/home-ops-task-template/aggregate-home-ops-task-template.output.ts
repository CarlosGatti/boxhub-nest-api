import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCountAggregate } from './home-ops-task-template-count-aggregate.output';
import { HomeOpsTaskTemplateAvgAggregate } from './home-ops-task-template-avg-aggregate.output';
import { HomeOpsTaskTemplateSumAggregate } from './home-ops-task-template-sum-aggregate.output';
import { HomeOpsTaskTemplateMinAggregate } from './home-ops-task-template-min-aggregate.output';
import { HomeOpsTaskTemplateMaxAggregate } from './home-ops-task-template-max-aggregate.output';

@ObjectType()
export class AggregateHomeOpsTaskTemplate {

    @Field(() => HomeOpsTaskTemplateCountAggregate, {nullable:true})
    _count?: HomeOpsTaskTemplateCountAggregate;

    @Field(() => HomeOpsTaskTemplateAvgAggregate, {nullable:true})
    _avg?: HomeOpsTaskTemplateAvgAggregate;

    @Field(() => HomeOpsTaskTemplateSumAggregate, {nullable:true})
    _sum?: HomeOpsTaskTemplateSumAggregate;

    @Field(() => HomeOpsTaskTemplateMinAggregate, {nullable:true})
    _min?: HomeOpsTaskTemplateMinAggregate;

    @Field(() => HomeOpsTaskTemplateMaxAggregate, {nullable:true})
    _max?: HomeOpsTaskTemplateMaxAggregate;
}
