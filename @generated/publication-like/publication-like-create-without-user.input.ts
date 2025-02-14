import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateNestedOneWithoutLikesInput } from '../publication/publication-create-nested-one-without-likes.input';

@InputType()
export class PublicationLikeCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PublicationCreateNestedOneWithoutLikesInput, {nullable:false})
    publication!: PublicationCreateNestedOneWithoutLikesInput;
}
