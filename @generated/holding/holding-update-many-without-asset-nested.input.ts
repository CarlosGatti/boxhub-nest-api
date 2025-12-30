import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateWithoutAssetInput } from './holding-create-without-asset.input';
import { Type } from 'class-transformer';
import { HoldingCreateOrConnectWithoutAssetInput } from './holding-create-or-connect-without-asset.input';
import { HoldingUpsertWithWhereUniqueWithoutAssetInput } from './holding-upsert-with-where-unique-without-asset.input';
import { HoldingCreateManyAssetInputEnvelope } from './holding-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { HoldingUpdateWithWhereUniqueWithoutAssetInput } from './holding-update-with-where-unique-without-asset.input';
import { HoldingUpdateManyWithWhereWithoutAssetInput } from './holding-update-many-with-where-without-asset.input';
import { HoldingScalarWhereInput } from './holding-scalar-where.input';

@InputType()
export class HoldingUpdateManyWithoutAssetNestedInput {

    @Field(() => [HoldingCreateWithoutAssetInput], {nullable:true})
    @Type(() => HoldingCreateWithoutAssetInput)
    create?: Array<HoldingCreateWithoutAssetInput>;

    @Field(() => [HoldingCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => HoldingCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<HoldingCreateOrConnectWithoutAssetInput>;

    @Field(() => [HoldingUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => HoldingUpsertWithWhereUniqueWithoutAssetInput)
    upsert?: Array<HoldingUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => HoldingCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => HoldingCreateManyAssetInputEnvelope)
    createMany?: HoldingCreateManyAssetInputEnvelope;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => HoldingUpdateWithWhereUniqueWithoutAssetInput)
    update?: Array<HoldingUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [HoldingUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    @Type(() => HoldingUpdateManyWithWhereWithoutAssetInput)
    updateMany?: Array<HoldingUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [HoldingScalarWhereInput], {nullable:true})
    @Type(() => HoldingScalarWhereInput)
    deleteMany?: Array<HoldingScalarWhereInput>;
}
