import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutPricePointsInput } from './asset-update-without-price-points.input';

@InputType()
export class AssetUpdateToOneWithWhereWithoutPricePointsInput {

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;

    @Field(() => AssetUpdateWithoutPricePointsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutPricePointsInput)
    data!: AssetUpdateWithoutPricePointsInput;
}
