import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationUpdateInput } from './publication-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';

@ArgsType()
export class UpdateOnePublicationArgs {

    @Field(() => PublicationUpdateInput, {nullable:false})
    @Type(() => PublicationUpdateInput)
    data!: PublicationUpdateInput;

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;
}
