import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogCommentReplyUncheckedCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-unchecked-create-nested-many-without-comment.input';

@InputType()
export class LogCommentUncheckedCreateWithoutLogInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LogCommentReplyUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: LogCommentReplyUncheckedCreateNestedManyWithoutCommentInput;
}
