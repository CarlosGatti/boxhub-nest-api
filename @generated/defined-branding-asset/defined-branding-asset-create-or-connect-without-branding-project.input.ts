import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetCreateWithoutBrandingProjectInput } from './defined-branding-asset-create-without-branding-project.input';

@InputType()
export class DefinedBrandingAssetCreateOrConnectWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingAssetCreateWithoutBrandingProjectInput, {nullable:false})
    @Type(() => DefinedBrandingAssetCreateWithoutBrandingProjectInput)
    create!: DefinedBrandingAssetCreateWithoutBrandingProjectInput;
}
