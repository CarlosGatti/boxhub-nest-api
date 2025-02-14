import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutUserInput } from './publication-create-without-user.input';

@InputType()
export class PublicationCreateOrConnectWithoutUserInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutUserInput, {nullable:false})
    @Type(() => PublicationCreateWithoutUserInput)
    create!: PublicationCreateWithoutUserInput;
}
