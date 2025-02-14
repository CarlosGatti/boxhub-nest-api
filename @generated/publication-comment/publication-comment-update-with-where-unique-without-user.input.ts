import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCommentUpdateWithoutUserInput } from './publication-comment-update-without-user.input';

@InputType()
export class PublicationCommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:false})
    @Type(() => PublicationCommentWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;

    @Field(() => PublicationCommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => PublicationCommentUpdateWithoutUserInput)
    data!: PublicationCommentUpdateWithoutUserInput;
}
