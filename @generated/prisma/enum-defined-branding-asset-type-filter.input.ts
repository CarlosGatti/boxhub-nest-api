import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from './defined-branding-asset-type.enum';
import { NestedEnumDefinedBrandingAssetTypeFilter } from './nested-enum-defined-branding-asset-type-filter.input';

@InputType()
export class EnumDefinedBrandingAssetTypeFilter {

    @Field(() => DefinedBrandingAssetType, {nullable:true})
    equals?: keyof typeof DefinedBrandingAssetType;

    @Field(() => [DefinedBrandingAssetType], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingAssetType>;

    @Field(() => [DefinedBrandingAssetType], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingAssetType>;

    @Field(() => NestedEnumDefinedBrandingAssetTypeFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingAssetTypeFilter;
}
