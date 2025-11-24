import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDiscartItemTypeFieldUpdateOperationsInput } from '../prisma/enum-discart-item-type-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { EnumDiscartItemCategoryFieldUpdateOperationsInput } from '../prisma/enum-discart-item-category-field-update-operations.input';
import { EnumDiscartItemConditionFieldUpdateOperationsInput } from '../prisma/enum-discart-item-condition-field-update-operations.input';
import { EnumDiscartItemStatusFieldUpdateOperationsInput } from '../prisma/enum-discart-item-status-field-update-operations.input';
import { DiscartItemUpdateimageUrlsInput } from './discart-item-updateimage-urls.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DiscartItemUpdateWithoutCreatedByInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDiscartItemTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDiscartItemTypeFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    price?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => EnumDiscartItemCategoryFieldUpdateOperationsInput, {nullable:true})
    category?: EnumDiscartItemCategoryFieldUpdateOperationsInput;

    @Field(() => EnumDiscartItemConditionFieldUpdateOperationsInput, {nullable:true})
    condition?: EnumDiscartItemConditionFieldUpdateOperationsInput;

    @Field(() => EnumDiscartItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDiscartItemStatusFieldUpdateOperationsInput;

    @Field(() => DiscartItemUpdateimageUrlsInput, {nullable:true})
    imageUrls?: DiscartItemUpdateimageUrlsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    pickupAddress?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    contactPhone?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
