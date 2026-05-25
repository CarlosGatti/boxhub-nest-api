import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from '../prisma/defined-branding-asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedBrandingAssetCountAggregate } from './defined-branding-asset-count-aggregate.output';
import { DefinedBrandingAssetAvgAggregate } from './defined-branding-asset-avg-aggregate.output';
import { DefinedBrandingAssetSumAggregate } from './defined-branding-asset-sum-aggregate.output';
import { DefinedBrandingAssetMinAggregate } from './defined-branding-asset-min-aggregate.output';
import { DefinedBrandingAssetMaxAggregate } from './defined-branding-asset-max-aggregate.output';

@ObjectType()
export class DefinedBrandingAssetGroupBy {

    @Field(() => Int, {nullable:false})
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
    fileName?: string;

    @Field(() => String, {nullable:true})
    mimeType?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedBrandingAssetCountAggregate, {nullable:true})
    _count?: DefinedBrandingAssetCountAggregate;

    @Field(() => DefinedBrandingAssetAvgAggregate, {nullable:true})
    _avg?: DefinedBrandingAssetAvgAggregate;

    @Field(() => DefinedBrandingAssetSumAggregate, {nullable:true})
    _sum?: DefinedBrandingAssetSumAggregate;

    @Field(() => DefinedBrandingAssetMinAggregate, {nullable:true})
    _min?: DefinedBrandingAssetMinAggregate;

    @Field(() => DefinedBrandingAssetMaxAggregate, {nullable:true})
    _max?: DefinedBrandingAssetMaxAggregate;
}
