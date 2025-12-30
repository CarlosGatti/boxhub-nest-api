import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PricePointCreateWithoutAssetInput } from './price-point-create-without-asset.input';
import { Type } from 'class-transformer';
import { PricePointCreateOrConnectWithoutAssetInput } from './price-point-create-or-connect-without-asset.input';
import { PricePointUpsertWithWhereUniqueWithoutAssetInput } from './price-point-upsert-with-where-unique-without-asset.input';
import { PricePointCreateManyAssetInputEnvelope } from './price-point-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { PricePointUpdateWithWhereUniqueWithoutAssetInput } from './price-point-update-with-where-unique-without-asset.input';
import { PricePointUpdateManyWithWhereWithoutAssetInput } from './price-point-update-many-with-where-without-asset.input';
import { PricePointScalarWhereInput } from './price-point-scalar-where.input';

@InputType()
export class PricePointUpdateManyWithoutAssetNestedInput {

    @Field(() => [PricePointCreateWithoutAssetInput], {nullable:true})
    @Type(() => PricePointCreateWithoutAssetInput)
    create?: Array<PricePointCreateWithoutAssetInput>;

    @Field(() => [PricePointCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => PricePointCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<PricePointCreateOrConnectWithoutAssetInput>;

    @Field(() => [PricePointUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => PricePointUpsertWithWhereUniqueWithoutAssetInput)
    upsert?: Array<PricePointUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => PricePointCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => PricePointCreateManyAssetInputEnvelope)
    createMany?: PricePointCreateManyAssetInputEnvelope;

    @Field(() => [PricePointWhereUniqueInput], {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>>;

    @Field(() => [PricePointWhereUniqueInput], {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>>;

    @Field(() => [PricePointWhereUniqueInput], {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>>;

    @Field(() => [PricePointWhereUniqueInput], {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>>;

    @Field(() => [PricePointUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => PricePointUpdateWithWhereUniqueWithoutAssetInput)
    update?: Array<PricePointUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [PricePointUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    @Type(() => PricePointUpdateManyWithWhereWithoutAssetInput)
    updateMany?: Array<PricePointUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [PricePointScalarWhereInput], {nullable:true})
    @Type(() => PricePointScalarWhereInput)
    deleteMany?: Array<PricePointScalarWhereInput>;
}
