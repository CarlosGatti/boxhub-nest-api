import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateNestedOneWithoutLikesInput } from '../publication/publication-create-nested-one-without-likes.input';
import { UserCreateNestedOneWithoutAllPublicationLikesInput } from '../user/user-create-nested-one-without-all-publication-likes.input';

@InputType()
export class PublicationLikeCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublicationCreateNestedOneWithoutLikesInput, {nullable:false})
    publication!: PublicationCreateNestedOneWithoutLikesInput;

    @Field(() => UserCreateNestedOneWithoutAllPublicationLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAllPublicationLikesInput;
}
