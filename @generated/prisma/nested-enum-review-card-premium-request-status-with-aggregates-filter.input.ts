import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from './review-card-premium-request-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewCardPremiumRequestStatusFilter } from './nested-enum-review-card-premium-request-status-filter.input';

@InputType()
export class NestedEnumReviewCardPremiumRequestStatusWithAggregatesFilter {

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    equals?: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => [ReviewCardPremiumRequestStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardPremiumRequestStatus>;

    @Field(() => [ReviewCardPremiumRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardPremiumRequestStatus>;

    @Field(() => NestedEnumReviewCardPremiumRequestStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewCardPremiumRequestStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewCardPremiumRequestStatusFilter, {nullable:true})
    _min?: NestedEnumReviewCardPremiumRequestStatusFilter;

    @Field(() => NestedEnumReviewCardPremiumRequestStatusFilter, {nullable:true})
    _max?: NestedEnumReviewCardPremiumRequestStatusFilter;
}
