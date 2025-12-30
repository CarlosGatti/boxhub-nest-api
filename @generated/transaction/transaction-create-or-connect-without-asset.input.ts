import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutAssetInput } from './transaction-create-without-asset.input';

@InputType()
export class TransactionCreateOrConnectWithoutAssetInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionCreateWithoutAssetInput, {nullable:false})
    @Type(() => TransactionCreateWithoutAssetInput)
    create!: TransactionCreateWithoutAssetInput;
}
