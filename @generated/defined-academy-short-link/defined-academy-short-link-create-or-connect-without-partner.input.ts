import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutPartnerInput } from './defined-academy-short-link-create-without-partner.input';

@InputType()
export class DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutPartnerInput)
    create!: DefinedAcademyShortLinkCreateWithoutPartnerInput;
}
