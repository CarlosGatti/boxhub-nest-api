import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetType } from './asset-type.enum';

@InputType()
export class NestedEnumAssetTypeFilter {

    @Field(() => AssetType, {nullable:true})
    equals?: keyof typeof AssetType;

    @Field(() => [AssetType], {nullable:true})
    in?: Array<keyof typeof AssetType>;

    @Field(() => [AssetType], {nullable:true})
    notIn?: Array<keyof typeof AssetType>;

    @Field(() => NestedEnumAssetTypeFilter, {nullable:true})
    not?: NestedEnumAssetTypeFilter;
}
