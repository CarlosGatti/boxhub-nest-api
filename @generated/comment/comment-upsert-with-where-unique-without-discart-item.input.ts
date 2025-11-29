import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutDiscartItemInput } from './comment-update-without-discart-item.input';
import { CommentCreateWithoutDiscartItemInput } from './comment-create-without-discart-item.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutDiscartItemInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutDiscartItemInput, {nullable:false})
    @Type(() => CommentUpdateWithoutDiscartItemInput)
    update!: CommentUpdateWithoutDiscartItemInput;

    @Field(() => CommentCreateWithoutDiscartItemInput, {nullable:false})
    @Type(() => CommentCreateWithoutDiscartItemInput)
    create!: CommentCreateWithoutDiscartItemInput;
}
