import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ConstructionLogRelationFilter } from '../construction-log/construction-log-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LogCommentReplyListRelationFilter } from '../log-comment-reply/log-comment-reply-list-relation-filter.input';

@InputType()
export class LogCommentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [LogCommentWhereInput], {nullable:true})
    AND?: Array<LogCommentWhereInput>;

    @Field(() => [LogCommentWhereInput], {nullable:true})
    OR?: Array<LogCommentWhereInput>;

    @Field(() => [LogCommentWhereInput], {nullable:true})
    NOT?: Array<LogCommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    logId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ConstructionLogRelationFilter, {nullable:true})
    log?: ConstructionLogRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => LogCommentReplyListRelationFilter, {nullable:true})
    replies?: LogCommentReplyListRelationFilter;
}
