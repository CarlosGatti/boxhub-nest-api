import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Type } from 'class-transformer';
import { PricePointCreateWithoutAssetInput } from './price-point-create-without-asset.input';

@InputType()
export class PricePointCreateOrConnectWithoutAssetInput {

    @Field(() => PricePointWhereUniqueInput, {nullable:false})
    @Type(() => PricePointWhereUniqueInput)
    where!: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;

    @Field(() => PricePointCreateWithoutAssetInput, {nullable:false})
    @Type(() => PricePointCreateWithoutAssetInput)
    create!: PricePointCreateWithoutAssetInput;
}
