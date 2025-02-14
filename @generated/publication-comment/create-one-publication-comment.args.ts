import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentCreateInput } from './publication-comment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePublicationCommentArgs {

    @Field(() => PublicationCommentCreateInput, {nullable:false})
    @Type(() => PublicationCommentCreateInput)
    data!: PublicationCommentCreateInput;
}
