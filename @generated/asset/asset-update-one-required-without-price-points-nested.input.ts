import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutPricePointsInput } from './asset-create-without-price-points.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutPricePointsInput } from './asset-create-or-connect-without-price-points.input';
import { AssetUpsertWithoutPricePointsInput } from './asset-upsert-without-price-points.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateToOneWithWhereWithoutPricePointsInput } from './asset-update-to-one-with-where-without-price-points.input';

@InputType()
export class AssetUpdateOneRequiredWithoutPricePointsNestedInput {

    @Field(() => AssetCreateWithoutPricePointsInput, {nullable:true})
    @Type(() => AssetCreateWithoutPricePointsInput)
    create?: AssetCreateWithoutPricePointsInput;

    @Field(() => AssetCreateOrConnectWithoutPricePointsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutPricePointsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutPricePointsInput;

    @Field(() => AssetUpsertWithoutPricePointsInput, {nullable:true})
    @Type(() => AssetUpsertWithoutPricePointsInput)
    upsert?: AssetUpsertWithoutPricePointsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetUpdateToOneWithWhereWithoutPricePointsInput, {nullable:true})
    @Type(() => AssetUpdateToOneWithWhereWithoutPricePointsInput)
    update?: AssetUpdateToOneWithWhereWithoutPricePointsInput;
}
