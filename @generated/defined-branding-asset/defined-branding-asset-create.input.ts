import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from '../prisma/defined-branding-asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateNestedOneWithoutAssetsInput } from '../defined-branding-project/defined-branding-project-create-nested-one-without-assets.input';

@InputType()
export class DefinedBrandingAssetCreateInput {

    @Field(() => DefinedBrandingAssetType, {nullable:false})
    type!: keyof typeof DefinedBrandingAssetType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => String, {nullable:true})
    mimeType?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedBrandingProjectCreateNestedOneWithoutAssetsInput, {nullable:false})
    brandingProject!: DefinedBrandingProjectCreateNestedOneWithoutAssetsInput;
}
