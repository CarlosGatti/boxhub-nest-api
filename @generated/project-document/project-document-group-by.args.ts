import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentWhereInput } from './project-document-where.input';
import { Type } from 'class-transformer';
import { ProjectDocumentOrderByWithAggregationInput } from './project-document-order-by-with-aggregation.input';
import { ProjectDocumentScalarFieldEnum } from './project-document-scalar-field.enum';
import { ProjectDocumentScalarWhereWithAggregatesInput } from './project-document-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProjectDocumentCountAggregateInput } from './project-document-count-aggregate.input';
import { ProjectDocumentAvgAggregateInput } from './project-document-avg-aggregate.input';
import { ProjectDocumentSumAggregateInput } from './project-document-sum-aggregate.input';
import { ProjectDocumentMinAggregateInput } from './project-document-min-aggregate.input';
import { ProjectDocumentMaxAggregateInput } from './project-document-max-aggregate.input';

@ArgsType()
export class ProjectDocumentGroupByArgs {

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    @Type(() => ProjectDocumentWhereInput)
    where?: ProjectDocumentWhereInput;

    @Field(() => [ProjectDocumentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectDocumentOrderByWithAggregationInput>;

    @Field(() => [ProjectDocumentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectDocumentScalarFieldEnum>;

    @Field(() => ProjectDocumentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProjectDocumentScalarWhereWithAggregatesInput;

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
