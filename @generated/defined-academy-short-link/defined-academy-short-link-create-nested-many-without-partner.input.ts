import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutPartnerInput } from './defined-academy-short-link-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput } from './defined-academy-short-link-create-or-connect-without-partner.input';
import { DefinedAcademyShortLinkCreateManyPartnerInputEnvelope } from './defined-academy-short-link-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkCreateNestedManyWithoutPartnerInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyPartnerInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
