import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutResourceInput } from './defined-academy-short-link-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput } from './defined-academy-short-link-create-or-connect-without-resource.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutResourceInput } from './defined-academy-short-link-upsert-with-where-unique-without-resource.input';
import { DefinedAcademyShortLinkCreateManyResourceInputEnvelope } from './defined-academy-short-link-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutResourceInput } from './defined-academy-short-link-update-with-where-unique-without-resource.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutResourceInput } from './defined-academy-short-link-update-many-with-where-without-resource.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUpdateManyWithoutResourceNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutResourceInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutResourceInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutResourceInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutResourceInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyResourceInputEnvelope;

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

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutResourceInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutResourceInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutResourceInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutResourceInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
