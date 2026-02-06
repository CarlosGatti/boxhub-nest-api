import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumReviewCardPremiumRequestStatusFieldUpdateOperationsInput } from '../prisma/enum-review-card-premium-request-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewCardProjectUpdateOneWithoutPremiumRequestsNestedInput } from '../review-card-project/review-card-project-update-one-without-premium-requests-nested.input';

@InputType()
export class ReviewCardPremiumRequestUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    notes?: StringFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardPremiumRequestStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewCardPremiumRequestStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewCardProjectUpdateOneWithoutPremiumRequestsNestedInput, {nullable:true})
    project?: ReviewCardProjectUpdateOneWithoutPremiumRequestsNestedInput;
}
