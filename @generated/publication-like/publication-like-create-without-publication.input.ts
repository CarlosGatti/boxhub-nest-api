import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAllPublicationLikesInput } from '../user/user-create-nested-one-without-all-publication-likes.input';

@InputType()
export class PublicationLikeCreateWithoutPublicationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAllPublicationLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAllPublicationLikesInput;
}
