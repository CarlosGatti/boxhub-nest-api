import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutPostInput } from './publication-update-without-post.input';

@InputType()
export class PublicationUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateWithoutPostInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutPostInput)
    data!: PublicationUpdateWithoutPostInput;
}
