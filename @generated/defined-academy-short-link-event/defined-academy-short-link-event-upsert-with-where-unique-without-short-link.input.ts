import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventUpdateWithoutShortLinkInput } from './defined-academy-short-link-event-update-without-short-link.input';
import { DefinedAcademyShortLinkEventCreateWithoutShortLinkInput } from './defined-academy-short-link-event-create-without-short-link.input';

@InputType()
export class DefinedAcademyShortLinkEventUpsertWithWhereUniqueWithoutShortLinkInput {

    @Field(() => DefinedAcademyShortLinkEventWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyShortLinkEventUpdateWithoutShortLinkInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventUpdateWithoutShortLinkInput)
    update!: DefinedAcademyShortLinkEventUpdateWithoutShortLinkInput;

    @Field(() => DefinedAcademyShortLinkEventCreateWithoutShortLinkInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventCreateWithoutShortLinkInput)
    create!: DefinedAcademyShortLinkEventCreateWithoutShortLinkInput;
}
