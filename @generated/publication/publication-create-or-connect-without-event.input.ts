import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutEventInput } from './publication-create-without-event.input';

@InputType()
export class PublicationCreateOrConnectWithoutEventInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutEventInput, {nullable:false})
    @Type(() => PublicationCreateWithoutEventInput)
    create!: PublicationCreateWithoutEventInput;
}
