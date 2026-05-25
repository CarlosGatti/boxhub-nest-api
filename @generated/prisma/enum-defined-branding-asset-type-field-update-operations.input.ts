import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetType } from './defined-branding-asset-type.enum';

@InputType()
export class EnumDefinedBrandingAssetTypeFieldUpdateOperationsInput {

    @Field(() => DefinedBrandingAssetType, {nullable:true})
    set?: keyof typeof DefinedBrandingAssetType;
}
