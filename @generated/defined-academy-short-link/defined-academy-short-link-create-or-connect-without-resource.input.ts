import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutResourceInput } from './defined-academy-short-link-create-without-resource.input';

@InputType()
export class DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutResourceInput)
    create!: DefinedAcademyShortLinkCreateWithoutResourceInput;
}
