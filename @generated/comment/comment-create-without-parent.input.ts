import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateNestedOneWithoutCommentsInput } from '../discart-item/discart-item-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommentCreateNestedManyWithoutParentInput } from './comment-create-nested-many-without-parent.input';

@InputType()
export class CommentCreateWithoutParentInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DiscartItemCreateNestedOneWithoutCommentsInput, {nullable:false})
    discartItem!: DiscartItemCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedManyWithoutParentInput, {nullable:true})
    replies?: CommentCreateNestedManyWithoutParentInput;
}
