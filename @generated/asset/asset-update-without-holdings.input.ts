import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAssetTypeFieldUpdateOperationsInput } from '../prisma/enum-asset-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PricePointUpdateManyWithoutAssetNestedInput } from '../price-point/price-point-update-many-without-asset-nested.input';
import { Type } from 'class-transformer';
import { TransactionUpdateManyWithoutAssetNestedInput } from '../transaction/transaction-update-many-without-asset-nested.input';

@InputType()
export class AssetUpdateWithoutHoldingsInput {

    @Field(() => EnumAssetTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAssetTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ticker?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    exchange?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PricePointUpdateManyWithoutAssetNestedInput, {nullable:true})
    @Type(() => PricePointUpdateManyWithoutAssetNestedInput)
    pricePoints?: PricePointUpdateManyWithoutAssetNestedInput;

    @Field(() => TransactionUpdateManyWithoutAssetNestedInput, {nullable:true})
    @Type(() => TransactionUpdateManyWithoutAssetNestedInput)
    transactions?: TransactionUpdateManyWithoutAssetNestedInput;
}
