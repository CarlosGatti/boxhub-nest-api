import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCommentUpdateWithoutUserInput } from './publication-comment-update-without-user.input';
import { PublicationCommentCreateWithoutUserInput } from './publication-comment-create-without-user.input';

@InputType()
export class PublicationCommentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;

    @Field(() => PublicationCommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => PublicationCommentUpdateWithoutUserInput)
    update!: PublicationCommentUpdateWithoutUserInput;

    @Field(() => PublicationCommentCreateWithoutUserInput, {nullable:false})
    @Type(() => PublicationCommentCreateWithoutUserInput)
    create!: PublicationCommentCreateWithoutUserInput;
}
