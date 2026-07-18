import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutPartnerInput } from './defined-academy-short-link-update-without-partner.input';
import { DefinedAcademyShortLinkCreateWithoutPartnerInput } from './defined-academy-short-link-create-without-partner.input';

@InputType()
export class DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutPartnerInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutPartnerInput)
    update!: DefinedAcademyShortLinkUpdateWithoutPartnerInput;

    @Field(() => DefinedAcademyShortLinkCreateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutPartnerInput)
    create!: DefinedAcademyShortLinkCreateWithoutPartnerInput;
}
