import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCommentCreateInput } from './publication-comment-create.input';
import { PublicationCommentUpdateInput } from './publication-comment-update.input';

@ArgsType()
export class UpsertOnePublicationCommentArgs {

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;

    @Field(() => PublicationCommentCreateInput, {nullable:false})
    @Type(() => PublicationCommentCreateInput)
    create!: PublicationCommentCreateInput;

    @Field(() => PublicationCommentUpdateInput, {nullable:false})
    @Type(() => PublicationCommentUpdateInput)
    update!: PublicationCommentUpdateInput;
}
