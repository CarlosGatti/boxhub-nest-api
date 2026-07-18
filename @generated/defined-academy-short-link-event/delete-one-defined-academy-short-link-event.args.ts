import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>;
}
