import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentWhereInput } from './publication-comment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPublicationCommentArgs {

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    @Type(() => PublicationCommentWhereInput)
    where?: PublicationCommentWhereInput;
}
