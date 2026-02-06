import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from './review-card-premium-request-status.enum';

@InputType()
export class EnumReviewCardPremiumRequestStatusFieldUpdateOperationsInput {

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    set?: keyof typeof ReviewCardPremiumRequestStatus;
}
