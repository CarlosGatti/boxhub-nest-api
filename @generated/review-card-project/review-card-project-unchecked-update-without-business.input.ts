import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumReviewCardProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-review-card-project-status-field-update-operations.input';
import { EnumReviewCardLinkModeFieldUpdateOperationsInput } from '../prisma/enum-review-card-link-mode-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewCardExportUncheckedUpdateManyWithoutProjectNestedInput } from '../review-card-export/review-card-export-unchecked-update-many-without-project-nested.input';
import { ReviewCardScanEventUncheckedUpdateManyWithoutProjectNestedInput } from '../review-card-scan-event/review-card-scan-event-unchecked-update-many-without-project-nested.input';
import { ReviewCardPremiumRequestUncheckedUpdateManyWithoutProjectNestedInput } from '../review-card-premium-request/review-card-premium-request-unchecked-update-many-without-project-nested.input';

@InputType()
export class ReviewCardProjectUncheckedUpdateWithoutBusinessInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    templateId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slug?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewCardProjectStatusFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardLinkModeFieldUpdateOperationsInput, {nullable:true})
    reviewLinkMode?: EnumReviewCardLinkModeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    googleReviewUrlFinal?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewCardExportUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    exports?: ReviewCardExportUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => ReviewCardScanEventUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    scans?: ReviewCardScanEventUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => ReviewCardPremiumRequestUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    premiumRequests?: ReviewCardPremiumRequestUncheckedUpdateManyWithoutProjectNestedInput;
}
