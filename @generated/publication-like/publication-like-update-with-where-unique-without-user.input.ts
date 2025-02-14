import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationLikeWhereUniqueInput } from './publication-like-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationLikeUpdateWithoutUserInput } from './publication-like-update-without-user.input';

@InputType()
export class PublicationLikeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PublicationLikeWhereUniqueInput, {nullable:false})
    @Type(() => PublicationLikeWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationLikeWhereUniqueInput, 'id'>;

    @Field(() => PublicationLikeUpdateWithoutUserInput, {nullable:false})
    @Type(() => PublicationLikeUpdateWithoutUserInput)
    data!: PublicationLikeUpdateWithoutUserInput;
}
