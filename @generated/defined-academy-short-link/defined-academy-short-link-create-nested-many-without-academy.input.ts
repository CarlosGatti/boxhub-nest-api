import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutAcademyInput } from './defined-academy-short-link-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput } from './defined-academy-short-link-create-or-connect-without-academy.input';
import { DefinedAcademyShortLinkCreateManyAcademyInputEnvelope } from './defined-academy-short-link-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
