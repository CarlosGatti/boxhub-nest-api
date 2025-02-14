import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationCommentWhereInput } from './publication-comment-where.input';
import { Type } from 'class-transformer';
import { PublicationCommentOrderByWithRelationInput } from './publication-comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublicationCommentWhereUniqueInput } from './publication-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublicationCommentScalarFieldEnum } from './publication-comment-scalar-field.enum';

@ArgsType()
export class FindFirstPublicationCommentArgs {

    @Field(() => PublicationCommentWhereInput, {nullable:true})
    @Type(() => PublicationCommentWhereInput)
    where?: PublicationCommentWhereInput;

    @Field(() => [PublicationCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublicationCommentOrderByWithRelationInput>;

    @Field(() => PublicationCommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublicationCommentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PublicationCommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PublicationCommentScalarFieldEnum>;
}
