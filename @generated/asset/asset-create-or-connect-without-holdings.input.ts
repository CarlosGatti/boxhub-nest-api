import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutHoldingsInput } from './asset-create-without-holdings.input';

@InputType()
export class AssetCreateOrConnectWithoutHoldingsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetCreateWithoutHoldingsInput, {nullable:false})
    @Type(() => AssetCreateWithoutHoldingsInput)
    create!: AssetCreateWithoutHoldingsInput;
}
