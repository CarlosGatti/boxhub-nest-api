import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateInput } from './defined-academy-short-link-create.input';
import { DefinedAcademyShortLinkUpdateInput } from './defined-academy-short-link-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyShortLinkArgs {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateInput)
    create!: DefinedAcademyShortLinkCreateInput;

    @Field(() => DefinedAcademyShortLinkUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateInput)
    update!: DefinedAcademyShortLinkUpdateInput;
}
