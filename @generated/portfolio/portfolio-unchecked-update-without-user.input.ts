import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HoldingUncheckedUpdateManyWithoutPortfolioNestedInput } from '../holding/holding-unchecked-update-many-without-portfolio-nested.input';
import { Type } from 'class-transformer';
import { TransactionUncheckedUpdateManyWithoutPortfolioNestedInput } from '../transaction/transaction-unchecked-update-many-without-portfolio-nested.input';

@InputType()
export class PortfolioUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    baseCurrency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HoldingUncheckedUpdateManyWithoutPortfolioNestedInput, {nullable:true})
    @Type(() => HoldingUncheckedUpdateManyWithoutPortfolioNestedInput)
    holdings?: HoldingUncheckedUpdateManyWithoutPortfolioNestedInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutPortfolioNestedInput, {nullable:true})
    @Type(() => TransactionUncheckedUpdateManyWithoutPortfolioNestedInput)
    transactions?: TransactionUncheckedUpdateManyWithoutPortfolioNestedInput;
}
