import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConstructionLogOrderByWithRelationInput } from '../construction-log/construction-log-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { LogCommentReplyOrderByRelationAggregateInput } from '../log-comment-reply/log-comment-reply-order-by-relation-aggregate.input';

@InputType()
export class LogCommentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ConstructionLogOrderByWithRelationInput, {nullable:true})
    log?: ConstructionLogOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => LogCommentReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: LogCommentReplyOrderByRelationAggregateInput;
}
