import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AssetType } from '../prisma/asset-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { HoldingUncheckedCreateNestedManyWithoutAssetInput } from '../holding/holding-unchecked-create-nested-many-without-asset.input';
import { Type } from 'class-transformer';
import { PricePointUncheckedCreateNestedManyWithoutAssetInput } from '../price-point/price-point-unchecked-create-nested-many-without-asset.input';

@InputType()
export class AssetUncheckedCreateWithoutTransactionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => HoldingUncheckedCreateNestedManyWithoutAssetInput, {nullable:true})
    @Type(() => HoldingUncheckedCreateNestedManyWithoutAssetInput)
    holdings?: HoldingUncheckedCreateNestedManyWithoutAssetInput;

    @Field(() => PricePointUncheckedCreateNestedManyWithoutAssetInput, {nullable:true})
    @Type(() => PricePointUncheckedCreateNestedManyWithoutAssetInput)
    pricePoints?: PricePointUncheckedCreateNestedManyWithoutAssetInput;
}
