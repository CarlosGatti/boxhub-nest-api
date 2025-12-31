import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutDiscartItemInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentsInput)
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutRepliesInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    replies?: CommentCreateNestedManyWithoutParentInput;
}
