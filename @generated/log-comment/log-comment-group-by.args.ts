import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';
import { Type } from 'class-transformer';
import { LogCommentOrderByWithAggregationInput } from './log-comment-order-by-with-aggregation.input';
import { LogCommentScalarFieldEnum } from './log-comment-scalar-field.enum';
import { LogCommentScalarWhereWithAggregatesInput } from './log-comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LogCommentCountAggregateInput } from './log-comment-count-aggregate.input';
import { LogCommentAvgAggregateInput } from './log-comment-avg-aggregate.input';
import { LogCommentSumAggregateInput } from './log-comment-sum-aggregate.input';
import { LogCommentMinAggregateInput } from './log-comment-min-aggregate.input';
import { LogCommentMaxAggregateInput } from './log-comment-max-aggregate.input';

@ArgsType()
export class LogCommentGroupByArgs {

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;

    @Field(() => [LogCommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LogCommentOrderByWithAggregationInput>;

    @Field(() => [LogCommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LogCommentScalarFieldEnum>;

    @Field(() => LogCommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: LogCommentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LogCommentCountAggregateInput, {nullable:true})
    _count?: LogCommentCountAggregateInput;

    @Field(() => LogCommentAvgAggregateInput, {nullable:true})
    _avg?: LogCommentAvgAggregateInput;

    @Field(() => LogCommentSumAggregateInput, {nullable:true})
    _sum?: LogCommentSumAggregateInput;

    @Field(() => LogCommentMinAggregateInput, {nullable:true})
    _min?: LogCommentMinAggregateInput;

    @Field(() => LogCommentMaxAggregateInput, {nullable:true})
    _max?: LogCommentMaxAggregateInput;
}
