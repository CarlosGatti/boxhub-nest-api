import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutPublicationInput } from './post-update-without-publication.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutPublicationInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutPublicationInput, {nullable:false})
    @Type(() => PostUpdateWithoutPublicationInput)
    data!: PostUpdateWithoutPublicationInput;
}
