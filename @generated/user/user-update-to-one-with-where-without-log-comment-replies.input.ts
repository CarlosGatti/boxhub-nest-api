import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLogCommentRepliesInput } from './user-update-without-log-comment-replies.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLogCommentRepliesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLogCommentRepliesInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogCommentRepliesInput)
    data!: UserUpdateWithoutLogCommentRepliesInput;
}
