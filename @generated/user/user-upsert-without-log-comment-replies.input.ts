import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLogCommentRepliesInput } from './user-update-without-log-comment-replies.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLogCommentRepliesInput {

    @Field(() => UserUpdateWithoutLogCommentRepliesInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogCommentRepliesInput)
    update!: UserUpdateWithoutLogCommentRepliesInput;

    @Field(() => UserCreateWithoutLogCommentRepliesInput, {nullable:false})
    @Type(() => UserCreateWithoutLogCommentRepliesInput)
    create!: UserCreateWithoutLogCommentRepliesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
