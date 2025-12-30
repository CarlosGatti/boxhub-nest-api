import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutAssetInput } from './transaction-create-without-asset.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutAssetInput } from './transaction-create-or-connect-without-asset.input';
import { TransactionUpsertWithWhereUniqueWithoutAssetInput } from './transaction-upsert-with-where-unique-without-asset.input';
import { TransactionCreateManyAssetInputEnvelope } from './transaction-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutAssetInput } from './transaction-update-with-where-unique-without-asset.input';
import { TransactionUpdateManyWithWhereWithoutAssetInput } from './transaction-update-many-with-where-without-asset.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutAssetNestedInput {

    @Field(() => [TransactionCreateWithoutAssetInput], {nullable:true})
    @Type(() => TransactionCreateWithoutAssetInput)
    create?: Array<TransactionCreateWithoutAssetInput>;

    @Field(() => [TransactionCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAssetInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutAssetInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutAssetInput>;

    @Field(() => TransactionCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyAssetInputEnvelope)
    createMany?: TransactionCreateManyAssetInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutAssetInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutAssetInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutAssetInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutAssetInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutAssetInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutAssetInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
