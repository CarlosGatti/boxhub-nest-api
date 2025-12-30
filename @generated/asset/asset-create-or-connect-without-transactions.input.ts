import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutTransactionsInput } from './asset-create-without-transactions.input';

@InputType()
export class AssetCreateOrConnectWithoutTransactionsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AssetCreateWithoutTransactionsInput)
    create!: AssetCreateWithoutTransactionsInput;
}
