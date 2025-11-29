import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutDiscartItemInput } from './comment-create-without-discart-item.input';

@InputType()
export class CommentCreateOrConnectWithoutDiscartItemInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutDiscartItemInput, {nullable:false})
    @Type(() => CommentCreateWithoutDiscartItemInput)
    create!: CommentCreateWithoutDiscartItemInput;
}
