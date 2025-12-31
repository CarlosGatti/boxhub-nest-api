import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateNestedOneWithoutCommentsInput } from '../discart-item/discart-item-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';

@InputType()
export class CommentCreateWithoutRepliesInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DiscartItemCreateNestedOneWithoutCommentsInput, {nullable:false})
    discartItem!: DiscartItemCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentsInput)
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutRepliesInput;
}
