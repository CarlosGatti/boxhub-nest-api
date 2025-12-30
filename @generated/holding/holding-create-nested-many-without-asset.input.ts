import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateWithoutAssetInput } from './holding-create-without-asset.input';
import { Type } from 'class-transformer';
import { HoldingCreateOrConnectWithoutAssetInput } from './holding-create-or-connect-without-asset.input';
import { HoldingCreateManyAssetInputEnvelope } from './holding-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';

@InputType()
export class HoldingCreateNestedManyWithoutAssetInput {

    @Field(() => [HoldingCreateWithoutAssetInput], {nullable:true})
    @Type(() => HoldingCreateWithoutAssetInput)
    create?: Array<HoldingCreateWithoutAssetInput>;

    @Field(() => [HoldingCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => HoldingCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<HoldingCreateOrConnectWithoutAssetInput>;

    @Field(() => HoldingCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => HoldingCreateManyAssetInputEnvelope)
    createMany?: HoldingCreateManyAssetInputEnvelope;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;
}
