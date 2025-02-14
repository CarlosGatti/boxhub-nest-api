import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutPublicationInput } from './post-create-without-publication.input';

@InputType()
export class PostCreateOrConnectWithoutPublicationInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutPublicationInput, {nullable:false})
    @Type(() => PostCreateWithoutPublicationInput)
    create!: PostCreateWithoutPublicationInput;
}
