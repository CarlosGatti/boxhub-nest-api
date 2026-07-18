import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkUpdateInput } from './defined-academy-short-link-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateInput)
    data!: DefinedAcademyShortLinkUpdateInput;

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;
}
