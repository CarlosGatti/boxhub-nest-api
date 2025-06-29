import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectDocumentCountAggregate } from './project-document-count-aggregate.output';
import { ProjectDocumentAvgAggregate } from './project-document-avg-aggregate.output';
import { ProjectDocumentSumAggregate } from './project-document-sum-aggregate.output';
import { ProjectDocumentMinAggregate } from './project-document-min-aggregate.output';
import { ProjectDocumentMaxAggregate } from './project-document-max-aggregate.output';

@ObjectType()
export class AggregateProjectDocument {

    @Field(() => ProjectDocumentCountAggregate, {nullable:true})
    _count?: ProjectDocumentCountAggregate;

    @Field(() => ProjectDocumentAvgAggregate, {nullable:true})
    _avg?: ProjectDocumentAvgAggregate;

    @Field(() => ProjectDocumentSumAggregate, {nullable:true})
    _sum?: ProjectDocumentSumAggregate;

    @Field(() => ProjectDocumentMinAggregate, {nullable:true})
    _min?: ProjectDocumentMinAggregate;

    @Field(() => ProjectDocumentMaxAggregate, {nullable:true})
    _max?: ProjectDocumentMaxAggregate;
}
