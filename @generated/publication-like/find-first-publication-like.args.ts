import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';
import { Type } from 'class-transformer';
import { PublicationLikeOrderByWithRelationInput } from './publication-like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublicationLikeScalarFieldEnum } from './publication-like-scalar-field.enum';

@ArgsType()
export class FindFirstPublicationLikeArgs {

    @Field(() => PublicationLikeWhereInput, {nullable:true})
    @Type(() => PublicationLikeWhereInput)
    where?: PublicationLikeWhereInput;

    @Field(() => [PublicationLikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublicationLikeOrderByWithRelationInput>;

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PublicationLikeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PublicationLikeScalarFieldEnum>;
}
