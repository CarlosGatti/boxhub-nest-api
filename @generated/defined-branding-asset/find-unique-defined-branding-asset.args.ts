import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingAssetWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;
}
