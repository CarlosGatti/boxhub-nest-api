import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPortfoliosNestedInput } from '../user/user-update-one-required-without-portfolios-nested.input';
import { TransactionUpdateManyWithoutPortfolioNestedInput } from '../transaction/transaction-update-many-without-portfolio-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PortfolioUpdateWithoutHoldingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    baseCurrency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPortfoliosNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput;

    @Field(() => TransactionUpdateManyWithoutPortfolioNestedInput, {nullable:true})
    @Type(() => TransactionUpdateManyWithoutPortfolioNestedInput)
    transactions?: TransactionUpdateManyWithoutPortfolioNestedInput;
}
