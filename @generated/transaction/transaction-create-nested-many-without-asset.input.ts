import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutAssetInput } from './transaction-create-without-asset.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutAssetInput } from './transaction-create-or-connect-without-asset.input';
import { TransactionCreateManyAssetInputEnvelope } from './transaction-create-many-asset-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionCreateNestedManyWithoutAssetInput {

    @Field(() => [TransactionCreateWithoutAssetInput], {nullable:true})
    @Type(() => TransactionCreateWithoutAssetInput)
    create?: Array<TransactionCreateWithoutAssetInput>;

    @Field(() => [TransactionCreateOrConnectWithoutAssetInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutAssetInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutAssetInput>;

    @Field(() => TransactionCreateManyAssetInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyAssetInputEnvelope)
    createMany?: TransactionCreateManyAssetInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
