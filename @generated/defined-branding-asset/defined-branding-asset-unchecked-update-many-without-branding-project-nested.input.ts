import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetCreateWithoutBrandingProjectInput } from './defined-branding-asset-create-without-branding-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput } from './defined-branding-asset-create-or-connect-without-branding-project.input';
import { DefinedBrandingAssetUpsertWithWhereUniqueWithoutBrandingProjectInput } from './defined-branding-asset-upsert-with-where-unique-without-branding-project.input';
import { DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope } from './defined-branding-asset-create-many-branding-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { DefinedBrandingAssetUpdateWithWhereUniqueWithoutBrandingProjectInput } from './defined-branding-asset-update-with-where-unique-without-branding-project.input';
import { DefinedBrandingAssetUpdateManyWithWhereWithoutBrandingProjectInput } from './defined-branding-asset-update-many-with-where-without-branding-project.input';
import { DefinedBrandingAssetScalarWhereInput } from './defined-branding-asset-scalar-where.input';

@InputType()
export class DefinedBrandingAssetUncheckedUpdateManyWithoutBrandingProjectNestedInput {

    @Field(() => [DefinedBrandingAssetCreateWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetCreateWithoutBrandingProjectInput)
    create?: Array<DefinedBrandingAssetCreateWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput)
    connectOrCreate?: Array<DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingAssetUpsertWithWhereUniqueWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetUpsertWithWhereUniqueWithoutBrandingProjectInput)
    upsert?: Array<DefinedBrandingAssetUpsertWithWhereUniqueWithoutBrandingProjectInput>;

    @Field(() => DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope)
    createMany?: DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope;

    @Field(() => [DefinedBrandingAssetWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingAssetWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingAssetWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingAssetWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingAssetUpdateWithWhereUniqueWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetUpdateWithWhereUniqueWithoutBrandingProjectInput)
    update?: Array<DefinedBrandingAssetUpdateWithWhereUniqueWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingAssetUpdateManyWithWhereWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetUpdateManyWithWhereWithoutBrandingProjectInput)
    updateMany?: Array<DefinedBrandingAssetUpdateManyWithWhereWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingAssetScalarWhereInput], {nullable:true})
    @Type(() => DefinedBrandingAssetScalarWhereInput)
    deleteMany?: Array<DefinedBrandingAssetScalarWhereInput>;
}
