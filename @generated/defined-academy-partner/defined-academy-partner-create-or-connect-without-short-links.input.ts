import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutShortLinksInput } from './defined-academy-partner-create-without-short-links.input';

@InputType()
export class DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutShortLinksInput)
    create!: DefinedAcademyPartnerCreateWithoutShortLinksInput;
}
