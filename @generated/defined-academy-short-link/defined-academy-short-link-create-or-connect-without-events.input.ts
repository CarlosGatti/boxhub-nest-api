import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutEventsInput } from './defined-academy-short-link-create-without-events.input';

@InputType()
export class DefinedAcademyShortLinkCreateOrConnectWithoutEventsInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateWithoutEventsInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutEventsInput)
    create!: DefinedAcademyShortLinkCreateWithoutEventsInput;
}
