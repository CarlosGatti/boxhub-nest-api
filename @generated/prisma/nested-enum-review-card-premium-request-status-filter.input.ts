import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from './review-card-premium-request-status.enum';

@InputType()
export class NestedEnumReviewCardPremiumRequestStatusFilter {

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    equals?: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => [ReviewCardPremiumRequestStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardPremiumRequestStatus>;

    @Field(() => [ReviewCardPremiumRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardPremiumRequestStatus>;

    @Field(() => NestedEnumReviewCardPremiumRequestStatusFilter, {nullable:true})
    not?: NestedEnumReviewCardPremiumRequestStatusFilter;
}
