import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentUpdateInput } from './publication-comment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';

@ArgsType()
export class UpdateOnePublicationCommentArgs {

    @Field(() => PublicationCommentUpdateInput, {nullable:false})
    @Type(() => PublicationCommentUpdateInput)
    data!: PublicationCommentUpdateInput;

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;
}
