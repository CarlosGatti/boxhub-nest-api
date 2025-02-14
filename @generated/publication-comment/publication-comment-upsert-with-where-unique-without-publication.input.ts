import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCommentUpdateWithoutPublicationInput } from './publication-comment-update-without-publication.input';
import { PublicationCommentCreateWithoutPublicationInput } from './publication-comment-create-without-publication.input';

@InputType()
export class PublicationCommentUpsertWithWhereUniqueWithoutPublicationInput {

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;

    @Field(() => PublicationCommentUpdateWithoutPublicationInput, {nullable:false})
    @Type(() => PublicationCommentUpdateWithoutPublicationInput)
    update!: PublicationCommentUpdateWithoutPublicationInput;

    @Field(() => PublicationCommentCreateWithoutPublicationInput, {nullable:false})
    @Type(() => PublicationCommentCreateWithoutPublicationInput)
    create!: PublicationCommentCreateWithoutPublicationInput;
}
