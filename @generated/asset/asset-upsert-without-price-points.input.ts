import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetUpdateWithoutPricePointsInput } from './asset-update-without-price-points.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutPricePointsInput } from './asset-create-without-price-points.input';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetUpsertWithoutPricePointsInput {

    @Field(() => AssetUpdateWithoutPricePointsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutPricePointsInput)
    update!: AssetUpdateWithoutPricePointsInput;

    @Field(() => AssetCreateWithoutPricePointsInput, {nullable:false})
    @Type(() => AssetCreateWithoutPricePointsInput)
    create!: AssetCreateWithoutPricePointsInput;

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;
}
