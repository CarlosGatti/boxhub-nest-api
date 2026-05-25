import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedBrandingAssetCountAggregate } from './defined-branding-asset-count-aggregate.output';
import { DefinedBrandingAssetAvgAggregate } from './defined-branding-asset-avg-aggregate.output';
import { DefinedBrandingAssetSumAggregate } from './defined-branding-asset-sum-aggregate.output';
import { DefinedBrandingAssetMinAggregate } from './defined-branding-asset-min-aggregate.output';
import { DefinedBrandingAssetMaxAggregate } from './defined-branding-asset-max-aggregate.output';

@ObjectType()
export class AggregateDefinedBrandingAsset {

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
