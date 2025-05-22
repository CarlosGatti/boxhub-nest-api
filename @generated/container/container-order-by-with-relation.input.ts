import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StorageOrderByWithRelationInput } from '../storage/storage-order-by-with-relation.input';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';
import { ItemOrderByRelationAggregateInput } from '../item/item-order-by-relation-aggregate.input';

@InputType()
export class ContainerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qrCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StorageOrderByWithRelationInput, {nullable:true})
    storage?: StorageOrderByWithRelationInput;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: CategoryOrderByRelationAggregateInput;

    @Field(() => ItemOrderByRelationAggregateInput, {nullable:true})
    items?: ItemOrderByRelationAggregateInput;
}
