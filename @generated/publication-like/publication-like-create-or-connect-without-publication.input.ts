import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateWithoutPublicationInput } from './publication-like-create-without-publication.input';

@InputType()
export class PublicationLikeCreateOrConnectWithoutPublicationInput {

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => PublicationLikeCreateWithoutPublicationInput, {nullable:false})
    @Type(() => PublicationLikeCreateWithoutPublicationInput)
    create!: PublicationLikeCreateWithoutPublicationInput;
}
