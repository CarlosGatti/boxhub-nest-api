import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAllPublicationCommentsInput } from '../user/user-create-nested-one-without-all-publication-comments.input';

@InputType()
export class PublicationCommentCreateWithoutPublicationInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAllPublicationCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAllPublicationCommentsInput;
}
