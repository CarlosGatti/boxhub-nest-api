import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LogCommentReplyCountAggregate } from './log-comment-reply-count-aggregate.output';
import { LogCommentReplyAvgAggregate } from './log-comment-reply-avg-aggregate.output';
import { LogCommentReplySumAggregate } from './log-comment-reply-sum-aggregate.output';
import { LogCommentReplyMinAggregate } from './log-comment-reply-min-aggregate.output';
import { LogCommentReplyMaxAggregate } from './log-comment-reply-max-aggregate.output';

@ObjectType()
export class AggregateLogCommentReply {

    @Field(() => LogCommentReplyCountAggregate, {nullable:true})
    _count?: LogCommentReplyCountAggregate;

    @Field(() => LogCommentReplyAvgAggregate, {nullable:true})
    _avg?: LogCommentReplyAvgAggregate;

    @Field(() => LogCommentReplySumAggregate, {nullable:true})
    _sum?: LogCommentReplySumAggregate;

    @Field(() => LogCommentReplyMinAggregate, {nullable:true})
    _min?: LogCommentReplyMinAggregate;

    @Field(() => LogCommentReplyMaxAggregate, {nullable:true})
    _max?: LogCommentReplyMaxAggregate;
}
