import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyUpdateManyMutationInput } from './log-comment-reply-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';

@ArgsType()
export class UpdateManyLogCommentReplyArgs {

    @Field(() => LogCommentReplyUpdateManyMutationInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateManyMutationInput)
    data!: LogCommentReplyUpdateManyMutationInput;

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    @Type(() => LogCommentReplyWhereInput)
    where?: LogCommentReplyWhereInput;
}
