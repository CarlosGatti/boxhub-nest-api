import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentCreateManyPublicationInput } from './publication-comment-create-many-publication.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCommentCreateManyPublicationInputEnvelope {

    @Field(() => [PublicationCommentCreateManyPublicationInput], {nullable:false})
    @Type(() => PublicationCommentCreateManyPublicationInput)
    data!: Array<PublicationCommentCreateManyPublicationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
