import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutAssetInput } from './transaction-update-without-asset.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>;

    @Field(() => TransactionUpdateWithoutAssetInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutAssetInput)
    data!: TransactionUpdateWithoutAssetInput;
}
