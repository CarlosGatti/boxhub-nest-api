import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCreateWithoutShortLinkInput } from './defined-academy-short-link-event-create-without-short-link.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput } from './defined-academy-short-link-event-create-or-connect-without-short-link.input';
import { DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope } from './defined-academy-short-link-event-create-many-short-link-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkEventUncheckedCreateNestedManyWithoutShortLinkInput {

    @Field(() => [DefinedAcademyShortLinkEventCreateWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateWithoutShortLinkInput)
    create?: Array<DefinedAcademyShortLinkEventCreateWithoutShortLinkInput>;

    @Field(() => [DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput>;

    @Field(() => DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope)
    createMany?: DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkEventWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>>;
}
