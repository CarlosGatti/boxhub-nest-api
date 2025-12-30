import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutTransactionsInput } from './asset-create-without-transactions.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutTransactionsInput } from './asset-create-or-connect-without-transactions.input';
import { AssetUpsertWithoutTransactionsInput } from './asset-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateToOneWithWhereWithoutTransactionsInput } from './asset-update-to-one-with-where-without-transactions.input';

@InputType()
export class AssetUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => AssetCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetCreateWithoutTransactionsInput)
    create?: AssetCreateWithoutTransactionsInput;

    @Field(() => AssetCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: AssetCreateOrConnectWithoutTransactionsInput;

    @Field(() => AssetUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetUpsertWithoutTransactionsInput)
    upsert?: AssetUpsertWithoutTransactionsInput;

    @Field(() => AssetWhereUniqueInput, {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => AssetUpdateToOneWithWhereWithoutTransactionsInput)
    update?: AssetUpdateToOneWithWhereWithoutTransactionsInput;
}
