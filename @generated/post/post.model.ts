import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { User } from '../user/user.model';
import { Publication } from '../publication/publication.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    published!: boolean;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    publicationId!: number | null;

    @Field(() => Visibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof Visibility;

    @Field(() => [String], {nullable:true})
    images!: Array<string>;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => [Publication], {nullable:true})
    publication?: Array<Publication>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
