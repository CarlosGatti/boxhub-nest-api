import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutCommunityInput } from './publication-create-without-community.input';

@InputType()
export class PublicationCreateOrConnectWithoutCommunityInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutCommunityInput, {nullable:false})
    @Type(() => PublicationCreateWithoutCommunityInput)
    create!: PublicationCreateWithoutCommunityInput;
}
