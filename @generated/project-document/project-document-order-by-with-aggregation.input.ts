import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectDocumentCountOrderByAggregateInput } from './project-document-count-order-by-aggregate.input';
import { ProjectDocumentAvgOrderByAggregateInput } from './project-document-avg-order-by-aggregate.input';
import { ProjectDocumentMaxOrderByAggregateInput } from './project-document-max-order-by-aggregate.input';
import { ProjectDocumentMinOrderByAggregateInput } from './project-document-min-order-by-aggregate.input';
import { ProjectDocumentSumOrderByAggregateInput } from './project-document-sum-order-by-aggregate.input';

@InputType()
export class ProjectDocumentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ProjectDocumentCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectDocumentCountOrderByAggregateInput;

    @Field(() => ProjectDocumentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProjectDocumentAvgOrderByAggregateInput;

    @Field(() => ProjectDocumentMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectDocumentMaxOrderByAggregateInput;

    @Field(() => ProjectDocumentMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectDocumentMinOrderByAggregateInput;

    @Field(() => ProjectDocumentSumOrderByAggregateInput, {nullable:true})
    _sum?: ProjectDocumentSumOrderByAggregateInput;
}
