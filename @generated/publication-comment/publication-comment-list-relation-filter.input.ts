import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCommentWhereInput } from './publication-comment-where.input';

@InputType()
export class PublicationCommentListRelationFilter {

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    every?: PublicationCommentWhereInput;

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    some?: PublicationCommentWhereInput;

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    none?: PublicationCommentWhereInput;
}
