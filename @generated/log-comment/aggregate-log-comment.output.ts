import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LogCommentCountAggregate } from './log-comment-count-aggregate.output';
import { LogCommentAvgAggregate } from './log-comment-avg-aggregate.output';
import { LogCommentSumAggregate } from './log-comment-sum-aggregate.output';
import { LogCommentMinAggregate } from './log-comment-min-aggregate.output';
import { LogCommentMaxAggregate } from './log-comment-max-aggregate.output';

@ObjectType()
export class AggregateLogComment {

    @Field(() => LogCommentCountAggregate, {nullable:true})
    _count?: LogCommentCountAggregate;

    @Field(() => LogCommentAvgAggregate, {nullable:true})
    _avg?: LogCommentAvgAggregate;

    @Field(() => LogCommentSumAggregate, {nullable:true})
    _sum?: LogCommentSumAggregate;

    @Field(() => LogCommentMinAggregate, {nullable:true})
    _min?: LogCommentMinAggregate;

    @Field(() => LogCommentMaxAggregate, {nullable:true})
    _max?: LogCommentMaxAggregate;
}
