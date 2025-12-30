import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Type } from 'class-transformer';
import { PricePointUpdateWithoutAssetInput } from './price-point-update-without-asset.input';

@InputType()
export class PricePointUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => PricePointWhereUniqueInput, {nullable:false})
    @Type(() => PricePointWhereUniqueInput)
    where!: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;

    @Field(() => PricePointUpdateWithoutAssetInput, {nullable:false})
    @Type(() => PricePointUpdateWithoutAssetInput)
    data!: PricePointUpdateWithoutAssetInput;
}
