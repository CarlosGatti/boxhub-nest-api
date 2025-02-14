import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Type } from 'class-transformer';
import { PublicationCreateInput } from './publication-create.input';
import { PublicationUpdateInput } from './publication-update.input';

@ArgsType()
export class UpsertOnePublicationArgs {

    @Field(() => PublicationWhereUniqueInput, {nullable:false})
    @Type(() => PublicationWhereUniqueInput)
    where!: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationCreateInput, {nullable:false})
    @Type(() => PublicationCreateInput)
    create!: PublicationCreateInput;

    @Field(() => PublicationUpdateInput, {nullable:false})
    @Type(() => PublicationUpdateInput)
    update!: PublicationUpdateInput;
}
