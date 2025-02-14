import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutPostInput } from './publication-create-without-post.input';

@InputType()
export class PublicationCreateOrConnectWithoutPostInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateWithoutPostInput, {nullable:false})
    @Type(() => PublicationCreateWithoutPostInput)
    create!: PublicationCreateWithoutPostInput;
}
