import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';

@InputType()
export class DefinedBrandingAssetListRelationFilter {

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    every?: DefinedBrandingAssetWhereInput;

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    some?: DefinedBrandingAssetWhereInput;

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    none?: DefinedBrandingAssetWhereInput;
}
