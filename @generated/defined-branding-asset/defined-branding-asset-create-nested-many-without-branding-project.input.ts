import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetCreateWithoutBrandingProjectInput } from './defined-branding-asset-create-without-branding-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput } from './defined-branding-asset-create-or-connect-without-branding-project.input';
import { DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope } from './defined-branding-asset-create-many-branding-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';

@InputType()
export class DefinedBrandingAssetCreateNestedManyWithoutBrandingProjectInput {

    @Field(() => [DefinedBrandingAssetCreateWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetCreateWithoutBrandingProjectInput)
    create?: Array<DefinedBrandingAssetCreateWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput)
    connectOrCreate?: Array<DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput>;

    @Field(() => DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope)
    createMany?: DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope;

    @Field(() => [DefinedBrandingAssetWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>>;
}
