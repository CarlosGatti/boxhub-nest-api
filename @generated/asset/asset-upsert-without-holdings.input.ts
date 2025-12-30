import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetUpdateWithoutHoldingsInput } from './asset-update-without-holdings.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutHoldingsInput } from './asset-create-without-holdings.input';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetUpsertWithoutHoldingsInput {

    @Field(() => AssetUpdateWithoutHoldingsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutHoldingsInput)
    update!: AssetUpdateWithoutHoldingsInput;

    @Field(() => AssetCreateWithoutHoldingsInput, {nullable:false})
    @Type(() => AssetCreateWithoutHoldingsInput)
    create!: AssetCreateWithoutHoldingsInput;

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;
}
