import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';

@InputType()
export class PublicationLikeListRelationFilter {

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    every?: PublicationLikeWhereInput;

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    some?: PublicationLikeWhereInput;

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    none?: PublicationLikeWhereInput;
}
