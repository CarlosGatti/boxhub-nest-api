import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogCommentReplyScalarWhereInput {

    @Field(() => [LogCommentReplyScalarWhereInput], {nullable:true})
    AND?: Array<LogCommentReplyScalarWhereInput>;

    @Field(() => [LogCommentReplyScalarWhereInput], {nullable:true})
    OR?: Array<LogCommentReplyScalarWhereInput>;

    @Field(() => [LogCommentReplyScalarWhereInput], {nullable:true})
    NOT?: Array<LogCommentReplyScalarWhereInput>;

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
}
