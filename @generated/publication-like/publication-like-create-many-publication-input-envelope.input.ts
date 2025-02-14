import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateManyPublicationInput } from './publication-like-create-many-publication.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationLikeCreateManyPublicationInputEnvelope {

    @Field(() => [PublicationLikeCreateManyPublicationInput], {nullable:false})
    @Type(() => PublicationLikeCreateManyPublicationInput)
    data!: Array<PublicationLikeCreateManyPublicationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
