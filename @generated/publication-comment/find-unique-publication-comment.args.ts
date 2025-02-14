import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePublicationCommentArgs {

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;
}
