import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationLikeCreateWithoutUserInput } from './publication-like-create-without-user.input';

@InputType()
export class PublicationLikeCreateOrConnectWithoutUserInput {

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => PublicationLikeCreateWithoutUserInput, {nullable:false})
    @Type(() => PublicationLikeCreateWithoutUserInput)
    create!: PublicationLikeCreateWithoutUserInput;
}
