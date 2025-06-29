import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProjectPhotoCountOrderByAggregateInput } from './project-photo-count-order-by-aggregate.input';
import { ProjectPhotoAvgOrderByAggregateInput } from './project-photo-avg-order-by-aggregate.input';
import { ProjectPhotoMaxOrderByAggregateInput } from './project-photo-max-order-by-aggregate.input';
import { ProjectPhotoMinOrderByAggregateInput } from './project-photo-min-order-by-aggregate.input';
import { ProjectPhotoSumOrderByAggregateInput } from './project-photo-sum-order-by-aggregate.input';

@InputType()
export class ProjectPhotoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    caption?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    stage?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ProjectPhotoCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectPhotoCountOrderByAggregateInput;

    @Field(() => ProjectPhotoAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProjectPhotoAvgOrderByAggregateInput;

    @Field(() => ProjectPhotoMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectPhotoMaxOrderByAggregateInput;

    @Field(() => ProjectPhotoMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectPhotoMinOrderByAggregateInput;

    @Field(() => ProjectPhotoSumOrderByAggregateInput, {nullable:true})
    _sum?: ProjectPhotoSumOrderByAggregateInput;
}
