import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutShortLinksInput } from './defined-academy-resource-create-without-short-links.input';

@InputType()
export class DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutShortLinksInput)
    create!: DefinedAcademyResourceCreateWithoutShortLinksInput;
}
