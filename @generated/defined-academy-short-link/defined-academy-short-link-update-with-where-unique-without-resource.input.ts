import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutResourceInput } from './defined-academy-short-link-update-without-resource.input';

@InputType()
export class DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutResourceInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutResourceInput)
    data!: DefinedAcademyShortLinkUpdateWithoutResourceInput;
}
