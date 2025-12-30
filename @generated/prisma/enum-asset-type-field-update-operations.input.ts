import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetType } from './asset-type.enum';

@InputType()
export class EnumAssetTypeFieldUpdateOperationsInput {

    @Field(() => AssetType, {nullable:true})
    set?: keyof typeof AssetType;
}
