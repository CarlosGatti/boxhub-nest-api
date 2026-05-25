import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from './defined-branding-asset-type.enum';
import { NestedEnumDefinedBrandingAssetTypeWithAggregatesFilter } from './nested-enum-defined-branding-asset-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedBrandingAssetTypeFilter } from './nested-enum-defined-branding-asset-type-filter.input';

@InputType()
export class EnumDefinedBrandingAssetTypeWithAggregatesFilter {

    @Field(() => DefinedBrandingAssetType, {nullable:true})
    equals?: keyof typeof DefinedBrandingAssetType;

    @Field(() => [DefinedBrandingAssetType], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingAssetType>;

    @Field(() => [DefinedBrandingAssetType], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingAssetType>;

    @Field(() => NestedEnumDefinedBrandingAssetTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingAssetTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedBrandingAssetTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedBrandingAssetTypeFilter;

    @Field(() => NestedEnumDefinedBrandingAssetTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedBrandingAssetTypeFilter;
}
