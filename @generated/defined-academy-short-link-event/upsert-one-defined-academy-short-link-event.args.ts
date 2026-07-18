import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventCreateInput } from './defined-academy-short-link-event-create.input';
import { DefinedAcademyShortLinkEventUpdateInput } from './defined-academy-short-link-event-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyShortLinkEventCreateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventCreateInput)
    create!: DefinedAcademyShortLinkEventCreateInput;

    @Field(() => DefinedAcademyShortLinkEventUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventUpdateInput)
    update!: DefinedAcademyShortLinkEventUpdateInput;
}
