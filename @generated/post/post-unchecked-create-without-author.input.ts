import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { PostCreateimagesInput } from './post-createimages.input';
import { PublicationUncheckedCreateNestedManyWithoutPostInput } from '../publication/publication-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => PublicationUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    publication?: PublicationUncheckedCreateNestedManyWithoutPostInput;
}
