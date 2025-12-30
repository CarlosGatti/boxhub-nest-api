import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PortfolioUpdateOneRequiredWithoutHoldingsNestedInput } from '../portfolio/portfolio-update-one-required-without-holdings-nested.input';
import { AssetUpdateOneRequiredWithoutHoldingsNestedInput } from '../asset/asset-update-one-required-without-holdings-nested.input';

@InputType()
export class HoldingUpdateInput {

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    quantity?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    averageCost?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PortfolioUpdateOneRequiredWithoutHoldingsNestedInput, {nullable:true})
    @Type(() => PortfolioUpdateOneRequiredWithoutHoldingsNestedInput)
    portfolio?: PortfolioUpdateOneRequiredWithoutHoldingsNestedInput;

    @Field(() => AssetUpdateOneRequiredWithoutHoldingsNestedInput, {nullable:true})
    @Type(() => AssetUpdateOneRequiredWithoutHoldingsNestedInput)
    asset?: AssetUpdateOneRequiredWithoutHoldingsNestedInput;
}
