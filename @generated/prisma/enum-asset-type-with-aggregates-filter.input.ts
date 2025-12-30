import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetType } from './asset-type.enum';
import { NestedEnumAssetTypeWithAggregatesFilter } from './nested-enum-asset-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAssetTypeFilter } from './nested-enum-asset-type-filter.input';

@InputType()
export class EnumAssetTypeWithAggregatesFilter {

    @Field(() => AssetType, {nullable:true})
    equals?: keyof typeof AssetType;

    @Field(() => [AssetType], {nullable:true})
    in?: Array<keyof typeof AssetType>;

    @Field(() => [AssetType], {nullable:true})
    notIn?: Array<keyof typeof AssetType>;

    @Field(() => NestedEnumAssetTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAssetTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAssetTypeFilter, {nullable:true})
    _min?: NestedEnumAssetTypeFilter;

    @Field(() => NestedEnumAssetTypeFilter, {nullable:true})
    _max?: NestedEnumAssetTypeFilter;
}
