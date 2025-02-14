import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutEventInput } from './publication-update-without-event.input';

@InputType()
export class PublicationUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateWithoutEventInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutEventInput)
    data!: PublicationUpdateWithoutEventInput;
}
