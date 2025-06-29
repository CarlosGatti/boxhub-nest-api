import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LogCommentReplyScalarWhereWithAggregatesInput {

    @Field(() => [LogCommentReplyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LogCommentReplyScalarWhereWithAggregatesInput>;

    @Field(() => [LogCommentReplyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LogCommentReplyScalarWhereWithAggregatesInput>;

    @Field(() => [LogCommentReplyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LogCommentReplyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    commentId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
