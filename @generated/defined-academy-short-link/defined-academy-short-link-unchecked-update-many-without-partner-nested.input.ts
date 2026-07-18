import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutPartnerInput } from './defined-academy-short-link-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput } from './defined-academy-short-link-create-or-connect-without-partner.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutPartnerInput } from './defined-academy-short-link-upsert-with-where-unique-without-partner.input';
import { DefinedAcademyShortLinkCreateManyPartnerInputEnvelope } from './defined-academy-short-link-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutPartnerInput } from './defined-academy-short-link-update-with-where-unique-without-partner.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutPartnerInput } from './defined-academy-short-link-update-many-with-where-without-partner.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUncheckedUpdateManyWithoutPartnerNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutPartnerInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutPartnerInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutPartnerInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyPartnerInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutPartnerInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutPartnerInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutPartnerInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutPartnerInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
