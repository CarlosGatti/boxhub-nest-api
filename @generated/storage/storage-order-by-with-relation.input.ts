import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StorageMemberOrderByRelationAggregateInput } from '../storage-member/storage-member-order-by-relation-aggregate.input';
import { ContainerOrderByRelationAggregateInput } from '../container/container-order-by-relation-aggregate.input';

@InputType()
export class StorageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StorageMemberOrderByRelationAggregateInput, {nullable:true})
    members?: StorageMemberOrderByRelationAggregateInput;

    @Field(() => ContainerOrderByRelationAggregateInput, {nullable:true})
    containers?: ContainerOrderByRelationAggregateInput;
}
