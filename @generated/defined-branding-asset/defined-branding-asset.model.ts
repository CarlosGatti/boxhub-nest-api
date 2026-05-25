import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from '../prisma/defined-branding-asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingProject } from '../defined-branding-project/defined-branding-project.model';

@ObjectType()
export class DefinedBrandingAsset {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    brandingProjectId!: number;

    @Field(() => DefinedBrandingAssetType, {nullable:false})
    type!: keyof typeof DefinedBrandingAssetType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => String, {nullable:true})
    fileName!: string | null;

    @Field(() => String, {nullable:true})
    mimeType!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedBrandingProject, {nullable:false})
    brandingProject?: DefinedBrandingProject;
}
