import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutPublicationInput } from './post-update-without-publication.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutPublicationInput } from './post-create-without-publication.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutPublicationInput {

    @Field(() => PostUpdateWithoutPublicationInput, {nullable:false})
    @Type(() => PostUpdateWithoutPublicationInput)
    update!: PostUpdateWithoutPublicationInput;

    @Field(() => PostCreateWithoutPublicationInput, {nullable:false})
    @Type(() => PostCreateWithoutPublicationInput)
    create!: PostCreateWithoutPublicationInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
