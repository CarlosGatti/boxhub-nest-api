import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PricePointCreateWithoutAssetInput } from './price-point-create-without-asset.input';
import { Type } from 'class-transformer';
import { PricePointCreateOrConnectWithoutAssetInput } from './price-point-create-or-connect-without-asset.input';
import { PricePointCreateManyAssetInputEnvelope } from './price-point-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';

@InputType()
export class PricePointUncheckedCreateNestedManyWithoutAssetInput {

    @Field(() => [PricePointCreateWithoutAssetInput], {nullable:true})
    @Type(() => PricePointCreateWithoutAssetInput)
    create?: Array<PricePointCreateWithoutAssetInput>;

    @Field(() => [PricePointCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => PricePointCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<PricePointCreateOrConnectWithoutAssetInput>;

    @Field(() => PricePointCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => PricePointCreateManyAssetInputEnvelope)
    createMany?: PricePointCreateManyAssetInputEnvelope;

    @Field(() => [PricePointWhereUniqueInput], {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>>;
}
