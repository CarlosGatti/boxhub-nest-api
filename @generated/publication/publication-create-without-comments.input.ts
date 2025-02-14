import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityCreateNestedOneWithoutPublicationsInput } from '../community/community-create-nested-one-without-publications.input';
import { EventCreateNestedOneWithoutPublicationsInput } from '../event/event-create-nested-one-without-publications.input';
import { PostCreateNestedOneWithoutPublicationInput } from '../post/post-create-nested-one-without-publication.input';
import { UserCreateNestedOneWithoutPublicationsInput } from '../user/user-create-nested-one-without-publications.input';
import { PublicationLikeCreateNestedManyWithoutPublicationInput } from '../publication-like/publication-like-create-nested-many-without-publication.input';

@InputType()
export class PublicationCreateWithoutCommentsInput {

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => CommunityCreateNestedOneWithoutPublicationsInput, {nullable:true})
    community?: CommunityCreateNestedOneWithoutPublicationsInput;

    @Field(() => EventCreateNestedOneWithoutPublicationsInput, {nullable:true})
    event?: EventCreateNestedOneWithoutPublicationsInput;

    @Field(() => PostCreateNestedOneWithoutPublicationInput, {nullable:false})
    post!: PostCreateNestedOneWithoutPublicationInput;

    @Field(() => UserCreateNestedOneWithoutPublicationsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPublicationsInput;

    @Field(() => PublicationLikeCreateNestedManyWithoutPublicationInput, {nullable:true})
    likes?: PublicationLikeCreateNestedManyWithoutPublicationInput;
}
