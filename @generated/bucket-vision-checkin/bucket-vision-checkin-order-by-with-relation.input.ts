import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionBoardOrderByWithRelationInput } from '../bucket-vision-board/bucket-vision-board-order-by-with-relation.input';

@InputType()
export class BucketVisionCheckinOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    kind?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mood?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    snapshot?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionBoardOrderByWithRelationInput, {nullable:true})
    board?: BucketVisionBoardOrderByWithRelationInput;
}
