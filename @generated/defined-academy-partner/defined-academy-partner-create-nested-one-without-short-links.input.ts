import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutShortLinksInput } from './defined-academy-partner-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput } from './defined-academy-partner-create-or-connect-without-short-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCreateNestedOneWithoutShortLinksInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutShortLinksInput)
    create?: DefinedAcademyPartnerCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;
}
