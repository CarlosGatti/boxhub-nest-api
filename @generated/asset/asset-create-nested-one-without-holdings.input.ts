import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutHoldingsInput } from './asset-create-without-holdings.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutHoldingsInput } from './asset-create-or-connect-without-holdings.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';

@InputType()
export class AssetCreateNestedOneWithoutHoldingsInput {

    @Field(() => AssetCreateWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetCreateWithoutHoldingsInput)
    create?: AssetCreateWithoutHoldingsInput;

    @Field(() => AssetCreateOrConnectWithoutHoldingsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutHoldingsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutHoldingsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;
}
