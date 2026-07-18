import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutCreatedByInput } from './defined-academy-short-link-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput } from './defined-academy-short-link-create-or-connect-without-created-by.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCreatedByInput } from './defined-academy-short-link-upsert-with-where-unique-without-created-by.input';
import { DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope } from './defined-academy-short-link-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCreatedByInput } from './defined-academy-short-link-update-with-where-unique-without-created-by.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutCreatedByInput } from './defined-academy-short-link-update-many-with-where-without-created-by.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyCreatedByInputEnvelope;

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

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
