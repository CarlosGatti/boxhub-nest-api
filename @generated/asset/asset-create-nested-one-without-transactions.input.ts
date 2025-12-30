import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutTransactionsInput } from './asset-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutTransactionsInput } from './asset-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';

@InputType()
export class AssetCreateNestedOneWithoutTransactionsInput {

    @Field(() => AssetCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetCreateWithoutTransactionsInput)
    create?: AssetCreateWithoutTransactionsInput;

    @Field(() => AssetCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;
}
