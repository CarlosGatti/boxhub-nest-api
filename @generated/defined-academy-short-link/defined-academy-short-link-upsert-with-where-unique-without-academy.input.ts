import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutAcademyInput } from './defined-academy-short-link-update-without-academy.input';
import { DefinedAcademyShortLinkCreateWithoutAcademyInput } from './defined-academy-short-link-create-without-academy.input';

@InputType()
export class DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutAcademyInput)
    update!: DefinedAcademyShortLinkUpdateWithoutAcademyInput;

    @Field(() => DefinedAcademyShortLinkCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutAcademyInput)
    create!: DefinedAcademyShortLinkCreateWithoutAcademyInput;
}
