import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutHoldingsInput } from './asset-create-without-holdings.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutHoldingsInput } from './asset-create-or-connect-without-holdings.input';
import { AssetUpsertWithoutHoldingsInput } from './asset-upsert-without-holdings.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateToOneWithWhereWithoutHoldingsInput } from './asset-update-to-one-with-where-without-holdings.input';

@InputType()
export class AssetUpdateOneRequiredWithoutHoldingsNestedInput {

    @Field(() => AssetCreateWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetCreateWithoutHoldingsInput)
    create?: AssetCreateWithoutHoldingsInput;

    @Field(() => AssetCreateOrConnectWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutHoldingsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput;

    @Field(() => AssetUpsertWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetUpsertWithoutHoldingsInput)
    upsert?: AssetUpsertWithoutHoldingsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetUpdateToOneWithWhereWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetUpdateToOneWithWhereWithoutHoldingsInput)
    update?: AssetUpdateToOneWithWhereWithoutHoldingsInput;
}
