import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutAcademyInput } from './defined-academy-short-link-update-without-academy.input';

@InputType()
export class DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutAcademyInput)
    data!: DefinedAcademyShortLinkUpdateWithoutAcademyInput;
}
