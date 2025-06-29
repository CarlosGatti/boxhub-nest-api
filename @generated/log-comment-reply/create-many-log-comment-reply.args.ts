import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyCreateManyInput } from './log-comment-reply-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLogCommentReplyArgs {

    @Field(() => [LogCommentReplyCreateManyInput], {nullable:false})
    @Type(() => LogCommentReplyCreateManyInput)
    data!: Array<LogCommentReplyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
