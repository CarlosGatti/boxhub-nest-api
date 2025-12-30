import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumTransactionTypeFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PortfolioUpdateOneRequiredWithoutTransactionsNestedInput } from '../portfolio/portfolio-update-one-required-without-transactions-nested.input';
import { AssetUpdateOneRequiredWithoutTransactionsNestedInput } from '../asset/asset-update-one-required-without-transactions-nested.input';

@InputType()
export class TransactionUpdateInput {

    @Field(() => EnumTransactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTransactionTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    quantity?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    fees?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    executedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PortfolioUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    @Type(() => PortfolioUpdateOneRequiredWithoutTransactionsNestedInput)
    portfolio?: PortfolioUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => AssetUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    @Type(() => AssetUpdateOneRequiredWithoutTransactionsNestedInput)
    asset?: AssetUpdateOneRequiredWithoutTransactionsNestedInput;
}
