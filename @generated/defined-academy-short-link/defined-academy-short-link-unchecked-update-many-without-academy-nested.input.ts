import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutAcademyInput } from './defined-academy-short-link-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput } from './defined-academy-short-link-create-or-connect-without-academy.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-short-link-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyShortLinkCreateManyAcademyInputEnvelope } from './defined-academy-short-link-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-short-link-update-with-where-unique-without-academy.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-short-link-update-many-with-where-without-academy.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUncheckedUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
