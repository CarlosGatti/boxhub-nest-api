import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetUpdateWithoutTransactionsInput } from './asset-update-without-transactions.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutTransactionsInput } from './asset-create-without-transactions.input';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetUpsertWithoutTransactionsInput {

    @Field(() => AssetUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutTransactionsInput)
    update!: AssetUpdateWithoutTransactionsInput;

    @Field(() => AssetCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => AssetCreateWithoutTransactionsInput)
    create!: AssetCreateWithoutTransactionsInput;

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;
}
