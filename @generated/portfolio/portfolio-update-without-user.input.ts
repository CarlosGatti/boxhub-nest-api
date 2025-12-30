import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HoldingUpdateManyWithoutPortfolioNestedInput } from '../holding/holding-update-many-without-portfolio-nested.input';
import { Type } from 'class-transformer';
import { TransactionUpdateManyWithoutPortfolioNestedInput } from '../transaction/transaction-update-many-without-portfolio-nested.input';

@InputType()
export class PortfolioUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    baseCurrency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HoldingUpdateManyWithoutPortfolioNestedInput, {nullable:true})
    @Type(() => HoldingUpdateManyWithoutPortfolioNestedInput)
    holdings?: HoldingUpdateManyWithoutPortfolioNestedInput;

    @Field(() => TransactionUpdateManyWithoutPortfolioNestedInput, {nullable:true})
    @Type(() => TransactionUpdateManyWithoutPortfolioNestedInput)
    transactions?: TransactionUpdateManyWithoutPortfolioNestedInput;
}
