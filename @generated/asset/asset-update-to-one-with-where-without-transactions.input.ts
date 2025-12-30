import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutTransactionsInput } from './asset-update-without-transactions.input';

@InputType()
export class AssetUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;

    @Field(() => AssetUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutTransactionsInput)
    data!: AssetUpdateWithoutTransactionsInput;
}
