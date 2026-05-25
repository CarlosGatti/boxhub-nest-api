import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetUpdateWithoutBrandingProjectInput } from './defined-branding-asset-update-without-branding-project.input';

@InputType()
export class DefinedBrandingAssetUpdateWithWhereUniqueWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingAssetUpdateWithoutBrandingProjectInput, {nullable:false})
    @Type(() => DefinedBrandingAssetUpdateWithoutBrandingProjectInput)
    data!: DefinedBrandingAssetUpdateWithoutBrandingProjectInput;
}
