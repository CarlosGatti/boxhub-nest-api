import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeCreateManyUserInput } from './publication-like-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PublicationLikeCreateManyUserInputEnvelope {

    @Field(() => [PublicationLikeCreateManyUserInput], {nullable:false})
    @Type(() => PublicationLikeCreateManyUserInput)
    data!: Array<PublicationLikeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
