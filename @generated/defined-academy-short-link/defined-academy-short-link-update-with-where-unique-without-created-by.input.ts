import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateWithoutCreatedByInput } from './defined-academy-short-link-update-without-created-by.input';

@InputType()
export class DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkUpdateWithoutCreatedByInput)
    data!: DefinedAcademyShortLinkUpdateWithoutCreatedByInput;
}
