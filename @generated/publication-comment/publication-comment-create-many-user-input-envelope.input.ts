import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateManyUserInput } from './publication-comment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCommentCreateManyUserInputEnvelope {

    @Field(() => [PublicationCommentCreateManyUserInput], {nullable:false})
    @Type(() => PublicationCommentCreateManyUserInput)
    data!: Array<PublicationCommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
