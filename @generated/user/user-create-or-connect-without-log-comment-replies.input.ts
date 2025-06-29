import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';

@InputType()
export class UserCreateOrConnectWithoutLogCommentRepliesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLogCommentRepliesInput, {nullable:false})
    @Type(() => UserCreateWithoutLogCommentRepliesInput)
    create!: UserCreateWithoutLogCommentRepliesInput;
}
