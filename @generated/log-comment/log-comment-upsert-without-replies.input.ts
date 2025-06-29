import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentUpdateWithoutRepliesInput } from './log-comment-update-without-replies.input';
import { Type } from 'class-transformer';
import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
import { LogCommentWhereInput } from './log-comment-where.input';

@InputType()
export class LogCommentUpsertWithoutRepliesInput {

    @Field(() => LogCommentUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => LogCommentUpdateWithoutRepliesInput)
    update!: LogCommentUpdateWithoutRepliesInput;

    @Field(() => LogCommentCreateWithoutRepliesInput, {nullable:false})
    @Type(() => LogCommentCreateWithoutRepliesInput)
    create!: LogCommentCreateWithoutRepliesInput;

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;
}
