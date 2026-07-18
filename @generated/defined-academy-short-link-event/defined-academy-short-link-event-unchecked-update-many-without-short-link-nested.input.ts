import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCreateWithoutShortLinkInput } from './defined-academy-short-link-event-create-without-short-link.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput } from './defined-academy-short-link-event-create-or-connect-without-short-link.input';
import { DefinedAcademyShortLinkEventUpsertWithWhereUniqueWithoutShortLinkInput } from './defined-academy-short-link-event-upsert-with-where-unique-without-short-link.input';
import { DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope } from './defined-academy-short-link-event-create-many-short-link-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';
import { DefinedAcademyShortLinkEventUpdateWithWhereUniqueWithoutShortLinkInput } from './defined-academy-short-link-event-update-with-where-unique-without-short-link.input';
import { DefinedAcademyShortLinkEventUpdateManyWithWhereWithoutShortLinkInput } from './defined-academy-short-link-event-update-many-with-where-without-short-link.input';
import { DefinedAcademyShortLinkEventScalarWhereInput } from './defined-academy-short-link-event-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkEventUncheckedUpdateManyWithoutShortLinkNestedInput {

    @Field(() => [DefinedAcademyShortLinkEventCreateWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateWithoutShortLinkInput)
    create?: Array<DefinedAcademyShortLinkEventCreateWithoutShortLinkInput>;

    @Field(() => [DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkEventCreateOrConnectWithoutShortLinkInput>;

    @Field(() => [DefinedAcademyShortLinkEventUpsertWithWhereUniqueWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventUpsertWithWhereUniqueWithoutShortLinkInput)
    upsert?: Array<DefinedAcademyShortLinkEventUpsertWithWhereUniqueWithoutShortLinkInput>;

    @Field(() => DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope)
    createMany?: DefinedAcademyShortLinkEventCreateManyShortLinkInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkEventWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyShortLinkEventWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyShortLinkEventWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyShortLinkEventWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyShortLinkEventUpdateWithWhereUniqueWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventUpdateWithWhereUniqueWithoutShortLinkInput)
    update?: Array<DefinedAcademyShortLinkEventUpdateWithWhereUniqueWithoutShortLinkInput>;

    @Field(() => [DefinedAcademyShortLinkEventUpdateManyWithWhereWithoutShortLinkInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventUpdateManyWithWhereWithoutShortLinkInput)
    updateMany?: Array<DefinedAcademyShortLinkEventUpdateManyWithWhereWithoutShortLinkInput>;

    @Field(() => [DefinedAcademyShortLinkEventScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkEventScalarWhereInput>;
}
