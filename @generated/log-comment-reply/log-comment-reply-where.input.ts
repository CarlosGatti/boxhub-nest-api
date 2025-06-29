import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LogCommentRelationFilter } from '../log-comment/log-comment-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class LogCommentReplyWhereInput {

    @Field(() => [LogCommentReplyWhereInput], {nullable:true})
    AND?: Array<LogCommentReplyWhereInput>;

    @Field(() => [LogCommentReplyWhereInput], {nullable:true})
    OR?: Array<LogCommentReplyWhereInput>;

    @Field(() => [LogCommentReplyWhereInput], {nullable:true})
    NOT?: Array<LogCommentReplyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    commentId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => LogCommentRelationFilter, {nullable:true})
    comment?: LogCommentRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
