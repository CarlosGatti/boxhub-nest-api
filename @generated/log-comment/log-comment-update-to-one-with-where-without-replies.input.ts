import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';
import { Type } from 'class-transformer';
import { LogCommentUpdateWithoutRepliesInput } from './log-comment-update-without-replies.input';

@InputType()
export class LogCommentUpdateToOneWithWhereWithoutRepliesInput {

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;

    @Field(() => LogCommentUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => LogCommentUpdateWithoutRepliesInput)
    data!: LogCommentUpdateWithoutRepliesInput;
}
