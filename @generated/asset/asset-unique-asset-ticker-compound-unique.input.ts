import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';

@InputType()
export class AssetUnique_asset_tickerCompoundUniqueInput {

    @Field(() => AssetType, {nullable:false})
    type!: keyof typeof AssetType;

    @Field(() => String, {nullable:false})
    ticker!: string;
}
