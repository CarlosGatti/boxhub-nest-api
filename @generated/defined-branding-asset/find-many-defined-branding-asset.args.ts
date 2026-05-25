import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetOrderByWithRelationInput } from './defined-branding-asset-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingAssetWhereUniqueInput } from './defined-branding-asset-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingAssetScalarFieldEnum } from './defined-branding-asset-scalar-field.enum';

@ArgsType()
export class FindManyDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    @Type(() => DefinedBrandingAssetWhereInput)
    where?: DefinedBrandingAssetWhereInput;

    @Field(() => [DefinedBrandingAssetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingAssetOrderByWithRelationInput>;

    @Field(() => DefinedBrandingAssetWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingAssetWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedBrandingAssetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedBrandingAssetScalarFieldEnum>;
}
