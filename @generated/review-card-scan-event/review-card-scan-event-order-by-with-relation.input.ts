import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardProjectOrderByWithRelationInput } from '../review-card-project/review-card-project-order-by-with-relation.input';

@InputType()
export class ReviewCardScanEventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ipHash?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userAgent?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    referer?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardProjectOrderByWithRelationInput, {nullable:true})
    project?: ReviewCardProjectOrderByWithRelationInput;
}
