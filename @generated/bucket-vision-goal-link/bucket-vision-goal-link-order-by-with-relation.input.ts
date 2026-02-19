import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionBoardOrderByWithRelationInput } from '../bucket-vision-board/bucket-vision-board-order-by-with-relation.input';
import { BucketGoalOrderByWithRelationInput } from '../bucket-goal/bucket-goal-order-by-with-relation.input';

@InputType()
export class BucketVisionGoalLinkOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionBoardOrderByWithRelationInput, {nullable:true})
    board?: BucketVisionBoardOrderByWithRelationInput;

    @Field(() => BucketGoalOrderByWithRelationInput, {nullable:true})
    goal?: BucketGoalOrderByWithRelationInput;
}
