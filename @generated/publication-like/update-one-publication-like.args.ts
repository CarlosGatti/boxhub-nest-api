import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationLikeUpdateInput } from './publication-like-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';

@ArgsType()
export class UpdateOnePublicationLikeArgs {

    @Field(() => PublicationLikeUpdateInput, {nullable:false})
    @Type(() => PublicationLikeUpdateInput)
    data!: PublicationLikeUpdateInput;

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;
}
