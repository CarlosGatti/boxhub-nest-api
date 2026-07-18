import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventUpdateInput } from './defined-academy-short-link-event-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventUpdateInput)
    data!: DefinedAcademyShortLinkEventUpdateInput;

    @Field(() => DefinedAcademyShortLinkEventWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>;
}
