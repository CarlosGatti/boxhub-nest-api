import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutPartnerInput } from './defined-academy-short-link-update-without-partner.input';

@InputType()
export class DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutPartnerInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutPartnerInput)
    data!: DefinedAcademyShortLinkUpdateWithoutPartnerInput;
}
