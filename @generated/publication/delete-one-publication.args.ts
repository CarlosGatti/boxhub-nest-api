import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePublicationArgs {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;
}
