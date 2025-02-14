import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateManyCommunityInput } from './publication-create-many-community.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationCreateManyCommunityInputEnvelope {

    @Field(() => [PublicationCreateManyCommunityInput], {nullable:false})
    @Type(() => PublicationCreateManyCommunityInput)
    data!: Array<PublicationCreateManyCommunityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
