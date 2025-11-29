import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateNestedOneWithoutCommentsInput } from '../discart-item/discart-item-create-nested-one-without-comments.input';
import { CommentCreateNestedOneWithoutRepliesInput } from './comment-create-nested-one-without-replies.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DiscartItemCreateNestedOneWithoutCommentsInput, {nullable:false})
    discartItem!: DiscartItemCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:true})
    parent?: CommentCreateNestedOneWithoutRepliesInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    replies?: CommentCreateNestedManyWithoutParentInput;
}
