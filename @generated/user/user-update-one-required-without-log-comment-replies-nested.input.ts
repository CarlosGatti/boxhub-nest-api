import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogCommentRepliesInput } from './user-create-or-connect-without-log-comment-replies.input';
import { UserUpsertWithoutLogCommentRepliesInput } from './user-upsert-without-log-comment-replies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLogCommentRepliesInput } from './user-update-to-one-with-where-without-log-comment-replies.input';

@InputType()
export class UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput {

    @Field(() => UserCreateWithoutLogCommentRepliesInput, {nullable:true})
    @Type(() => UserCreateWithoutLogCommentRepliesInput)
    create?: UserCreateWithoutLogCommentRepliesInput;

    @Field(() => UserCreateOrConnectWithoutLogCommentRepliesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogCommentRepliesInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentRepliesInput;

    @Field(() => UserUpsertWithoutLogCommentRepliesInput, {nullable:true})
    @Type(() => UserUpsertWithoutLogCommentRepliesInput)
    upsert?: UserUpsertWithoutLogCommentRepliesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLogCommentRepliesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLogCommentRepliesInput)
    update?: UserUpdateToOneWithWhereWithoutLogCommentRepliesInput;
}
