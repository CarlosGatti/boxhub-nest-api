import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutCommentsInput } from './publication-create-without-comments.input';

@InputType()
export class PublicationCreateOrConnectWithoutCommentsInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PublicationCreateWithoutCommentsInput)
    create!: PublicationCreateWithoutCommentsInput;
}
