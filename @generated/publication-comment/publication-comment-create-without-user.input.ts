import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateNestedOneWithoutCommentsInput } from '../publication/publication-create-nested-one-without-comments.input';

@InputType()
export class PublicationCommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublicationCreateNestedOneWithoutCommentsInput, {nullable:false})
    publication!: PublicationCreateNestedOneWithoutCommentsInput;
}
