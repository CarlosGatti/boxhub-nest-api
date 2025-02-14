import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { PublicationCommentUncheckedCreateNestedManyWithoutPublicationInput } from '../publication-comment/publication-comment-unchecked-create-nested-many-without-publication.input';
import { PublicationLikeUncheckedCreateNestedManyWithoutPublicationInput } from '../publication-like/publication-like-unchecked-create-nested-many-without-publication.input';

@InputType()
export class PublicationUncheckedCreateWithoutCommunityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => PublicationCommentUncheckedCreateNestedManyWithoutPublicationInput, {nullable:true})
    comments?: PublicationCommentUncheckedCreateNestedManyWithoutPublicationInput;

    @Field(() => PublicationLikeUncheckedCreateNestedManyWithoutPublicationInput, {nullable:true})
    likes?: PublicationLikeUncheckedCreateNestedManyWithoutPublicationInput;
}
