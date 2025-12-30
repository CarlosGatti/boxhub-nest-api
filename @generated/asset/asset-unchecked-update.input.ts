import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumAssetTypeFieldUpdateOperationsInput } from '../prisma/enum-asset-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HoldingUncheckedUpdateManyWithoutAssetNestedInput } from '../holding/holding-unchecked-update-many-without-asset-nested.input';
import { Type } from 'class-transformer';
import { PricePointUncheckedUpdateManyWithoutAssetNestedInput } from '../price-point/price-point-unchecked-update-many-without-asset-nested.input';
import { TransactionUncheckedUpdateManyWithoutAssetNestedInput } from '../transaction/transaction-unchecked-update-many-without-asset-nested.input';

@InputType()
export class AssetUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => HoldingUncheckedUpdateManyWithoutAssetNestedInput, {nullable:true})
    @Type(() => HoldingUncheckedUpdateManyWithoutAssetNestedInput)
    holdings?: HoldingUncheckedUpdateManyWithoutAssetNestedInput;

    @Field(() => PricePointUncheckedUpdateManyWithoutAssetNestedInput, {nullable:true})
    @Type(() => PricePointUncheckedUpdateManyWithoutAssetNestedInput)
    pricePoints?: PricePointUncheckedUpdateManyWithoutAssetNestedInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutAssetNestedInput, {nullable:true})
    @Type(() => TransactionUncheckedUpdateManyWithoutAssetNestedInput)
    transactions?: TransactionUncheckedUpdateManyWithoutAssetNestedInput;
}
