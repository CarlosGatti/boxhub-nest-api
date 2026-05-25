import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetCreateInput } from './defined-branding-asset-create.input';
import { DefinedBrandingAssetUpdateInput } from './defined-branding-asset-update.input';

@ArgsType()
export class UpsertOneDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;

    @Field(() => DefinedBrandingAssetCreateInput, {nullable:false})
    @Type(() => DefinedBrandingAssetCreateInput)
    create!: DefinedBrandingAssetCreateInput;

    @Field(() => DefinedBrandingAssetUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingAssetUpdateInput)
    update!: DefinedBrandingAssetUpdateInput;
}
