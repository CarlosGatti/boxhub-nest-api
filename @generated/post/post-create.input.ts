import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { PostCreateimagesInput } from './post-createimages.input';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { PublicationCreateNestedManyWithoutPostInput } from '../publication/publication-create-nested-many-without-post.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    publicationId?: number;

    @Field(() => Visibility, {nullable:true})
    visibility?: keyof typeof Visibility;

    @Field(() => PostCreateimagesInput, {nullable:true})
    images?: PostCreateimagesInput;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:true})
    author?: UserCreateNestedOneWithoutPostsInput;

    @Field(() => PublicationCreateNestedManyWithoutPostInput, {nullable:true})
    publication?: PublicationCreateNestedManyWithoutPostInput;
}
