import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutPricePointsInput } from './asset-create-without-price-points.input';

@InputType()
export class AssetCreateOrConnectWithoutPricePointsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id' | 'unique_asset_ticker'>;

    @Field(() => AssetCreateWithoutPricePointsInput, {nullable:false})
    @Type(() => AssetCreateWithoutPricePointsInput)
    create!: AssetCreateWithoutPricePointsInput;
}
