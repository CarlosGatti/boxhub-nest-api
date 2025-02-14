import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityOrderByWithRelationInput } from '../community/community-order-by-with-relation.input';
import { EventOrderByWithRelationInput } from '../event/event-order-by-with-relation.input';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PublicationCommentOrderByRelationAggregateInput } from '../publication-comment/publication-comment-order-by-relation-aggregate.input';
import { PublicationLikeOrderByRelationAggregateInput } from '../publication-like/publication-like-order-by-relation-aggregate.input';

@InputType()
export class PublicationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    eventId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => CommunityOrderByWithRelationInput, {nullable:true})
    community?: CommunityOrderByWithRelationInput;

    @Field(() => EventOrderByWithRelationInput, {nullable:true})
    event?: EventOrderByWithRelationInput;

    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    post?: PostOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PublicationCommentOrderByRelationAggregateInput, {nullable:true})
    comments?: PublicationCommentOrderByRelationAggregateInput;

    @Field(() => PublicationLikeOrderByRelationAggregateInput, {nullable:true})
    likes?: PublicationLikeOrderByRelationAggregateInput;
}
