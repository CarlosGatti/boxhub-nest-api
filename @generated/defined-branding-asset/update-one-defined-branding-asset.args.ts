import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetUpdateInput } from './defined-branding-asset-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';

@ArgsType()
export class UpdateOneDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetUpdateInput, {nullable:false})
    @Type(() => DefinedBrandingAssetUpdateInput)
    data!: DefinedBrandingAssetUpdateInput;

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;
}
