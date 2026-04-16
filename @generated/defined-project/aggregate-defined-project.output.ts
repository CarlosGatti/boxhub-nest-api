import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedProjectCountAggregate } from './defined-project-count-aggregate.output';
import { DefinedProjectAvgAggregate } from './defined-project-avg-aggregate.output';
import { DefinedProjectSumAggregate } from './defined-project-sum-aggregate.output';
import { DefinedProjectMinAggregate } from './defined-project-min-aggregate.output';
import { DefinedProjectMaxAggregate } from './defined-project-max-aggregate.output';

@ObjectType()
export class AggregateDefinedProject {

    @Field(() => DefinedProjectCountAggregate, {nullable:true})
    _count?: DefinedProjectCountAggregate;

    @Field(() => DefinedProjectAvgAggregate, {nullable:true})
    _avg?: DefinedProjectAvgAggregate;

    @Field(() => DefinedProjectSumAggregate, {nullable:true})
    _sum?: DefinedProjectSumAggregate;

    @Field(() => DefinedProjectMinAggregate, {nullable:true})
    _min?: DefinedProjectMinAggregate;

    @Field(() => DefinedProjectMaxAggregate, {nullable:true})
    _max?: DefinedProjectMaxAggregate;
}
