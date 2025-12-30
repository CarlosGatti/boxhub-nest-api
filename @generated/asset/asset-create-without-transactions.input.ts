import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { HoldingCreateNestedManyWithoutAssetInput } from '../holding/holding-create-nested-many-without-asset.input';
import { Type } from 'class-transformer';
import { PricePointCreateNestedManyWithoutAssetInput } from '../price-point/price-point-create-nested-many-without-asset.input';

@InputType()
export class AssetCreateWithoutTransactionsInput {

    @Field(() => AssetType, {nullable:false})
    type!: keyof typeof AssetType;

    @Field(() => String, {nullable:true})
    ticker?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    exchange?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HoldingCreateNestedManyWithoutAssetInput, {nullable:true})
    @Type(() => HoldingCreateNestedManyWithoutAssetInput)
    holdings?: HoldingCreateNestedManyWithoutAssetInput;

    @Field(() => PricePointCreateNestedManyWithoutAssetInput, {nullable:true})
    @Type(() => PricePointCreateNestedManyWithoutAssetInput)
    pricePoints?: PricePointCreateNestedManyWithoutAssetInput;
}
