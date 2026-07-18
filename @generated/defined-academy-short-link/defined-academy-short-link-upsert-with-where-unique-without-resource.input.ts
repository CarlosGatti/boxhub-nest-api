import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutResourceInput } from './defined-academy-short-link-update-without-resource.input';
import { DefinedAcademyShortLinkCreateWithoutResourceInput } from './defined-academy-short-link-create-without-resource.input';

@InputType()
export class DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutResourceInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutResourceInput)
    update!: DefinedAcademyShortLinkUpdateWithoutResourceInput;

    @Field(() => DefinedAcademyShortLinkCreateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutResourceInput)
    create!: DefinedAcademyShortLinkCreateWithoutResourceInput;
}
