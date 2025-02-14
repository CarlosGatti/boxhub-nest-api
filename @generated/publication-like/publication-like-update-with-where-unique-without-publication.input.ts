import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationLikeUpdateWithoutPublicationInput } from './publication-like-update-without-publication.input';

@InputType()
export class PublicationLikeUpdateWithWhereUniqueWithoutPublicationInput {

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => PublicationLikeUpdateWithoutPublicationInput, {nullable:false})
    @Type(() => PublicationLikeUpdateWithoutPublicationInput)
    data!: PublicationLikeUpdateWithoutPublicationInput;
}
