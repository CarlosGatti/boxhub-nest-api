import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutCommunityInput } from './publication-update-without-community.input';

@InputType()
export class PublicationUpdateWithWhereUniqueWithoutCommunityInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateWithoutCommunityInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutCommunityInput)
    data!: PublicationUpdateWithoutCommunityInput;
}
