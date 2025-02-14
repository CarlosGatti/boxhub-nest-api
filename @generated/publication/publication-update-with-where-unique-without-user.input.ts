import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutUserInput } from './publication-update-without-user.input';

@InputType()
export class PublicationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateWithoutUserInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutUserInput)
    data!: PublicationUpdateWithoutUserInput;
}
