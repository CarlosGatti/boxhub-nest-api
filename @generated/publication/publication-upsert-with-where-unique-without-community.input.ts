import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutCommunityInput } from './publication-update-without-community.input';
import { PublicationCreateWithoutCommunityInput } from './publication-create-without-community.input';

@InputType()
export class PublicationUpsertWithWhereUniqueWithoutCommunityInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutCommunityInput)
    update!: PublicationUpdateWithoutCommunityInput;

    @Field(() => PublicationCreateWithoutCommunityInput, {nullable:false})
    @Type(() => PublicationCreateWithoutCommunityInput)
    create!: PublicationCreateWithoutCommunityInput;
}
