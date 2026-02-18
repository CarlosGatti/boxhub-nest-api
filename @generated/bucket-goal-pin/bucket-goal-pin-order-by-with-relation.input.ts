import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketGoalOrderByWithRelationInput } from '../bucket-goal/bucket-goal-order-by-with-relation.input';

@InputType()
export class BucketGoalPinOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lng?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    placeId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    raw?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalOrderByWithRelationInput, {nullable:true})
    goal?: BucketGoalOrderByWithRelationInput;
}
