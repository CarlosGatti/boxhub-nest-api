import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateInput } from './publication-like-create.input';
import { PublicationLikeUpdateInput } from './publication-like-update.input';

@ArgsType()
export class UpsertOnePublicationLikeArgs {

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => PublicationLikeCreateInput, {nullable:false})
    @Type(() => PublicationLikeCreateInput)
    create!: PublicationLikeCreateInput;

    @Field(() => PublicationLikeUpdateInput, {nullable:false})
    @Type(() => PublicationLikeUpdateInput)
    update!: PublicationLikeUpdateInput;
}
