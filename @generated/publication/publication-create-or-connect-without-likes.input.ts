import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutLikesInput } from './publication-create-without-likes.input';

@InputType()
export class PublicationCreateOrConnectWithoutLikesInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutLikesInput, {nullable:false})
    @Type(() => PublicationCreateWithoutLikesInput)
    create!: PublicationCreateWithoutLikesInput;
}
