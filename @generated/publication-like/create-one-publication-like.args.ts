import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeCreateInput } from './publication-like-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePublicationLikeArgs {

    @Field(() => PublicationLikeCreateInput, {nullable:false})
    @Type(() => PublicationLikeCreateInput)
    data!: PublicationLikeCreateInput;
}
