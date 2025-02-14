import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateNestedOneWithoutCommentsInput } from '../publication/publication-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutAllPublicationCommentsInput } from '../user/user-create-nested-one-without-all-publication-comments.input';

@InputType()
export class PublicationCommentCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublicationCreateNestedOneWithoutCommentsInput, {nullable:false})
    publication!: PublicationCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutAllPublicationCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAllPublicationCommentsInput;
}
