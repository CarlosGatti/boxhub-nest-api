import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentWhereInput } from './project-document-where.input';
import { Type } from 'class-transformer';
import { ProjectDocumentOrderByWithRelationInput } from './project-document-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectDocumentCountAggregateInput } from './project-document-count-aggregate.input';
import { ProjectDocumentAvgAggregateInput } from './project-document-avg-aggregate.input';
import { ProjectDocumentSumAggregateInput } from './project-document-sum-aggregate.input';
import { ProjectDocumentMinAggregateInput } from './project-document-min-aggregate.input';
import { ProjectDocumentMaxAggregateInput } from './project-document-max-aggregate.input';

@ArgsType()
export class ProjectDocumentAggregateArgs {

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    @Type(() => ProjectDocumentWhereInput)
    where?: ProjectDocumentWhereInput;

    @Field(() => [ProjectDocumentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectDocumentOrderByWithRelationInput>;

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectDocumentCountAggregateInput, {nullable:true})
    _count?: ProjectDocumentCountAggregateInput;

    @Field(() => ProjectDocumentAvgAggregateInput, {nullable:true})
    _avg?: ProjectDocumentAvgAggregateInput;

    @Field(() => ProjectDocumentSumAggregateInput, {nullable:true})
    _sum?: ProjectDocumentSumAggregateInput;

    @Field(() => ProjectDocumentMinAggregateInput, {nullable:true})
    _min?: ProjectDocumentMinAggregateInput;

    @Field(() => ProjectDocumentMaxAggregateInput, {nullable:true})
    _max?: ProjectDocumentMaxAggregateInput;
}
