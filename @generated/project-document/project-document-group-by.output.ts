import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { ProjectDocumentCountAggregate } from './project-document-count-aggregate.output';
import { ProjectDocumentAvgAggregate } from './project-document-avg-aggregate.output';
import { ProjectDocumentSumAggregate } from './project-document-sum-aggregate.output';
import { ProjectDocumentMinAggregate } from './project-document-min-aggregate.output';
import { ProjectDocumentMaxAggregate } from './project-document-max-aggregate.output';

@ObjectType()
export class ProjectDocumentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

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
