import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardLinkMode } from './review-card-link-mode.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewCardLinkModeFilter } from './nested-enum-review-card-link-mode-filter.input';

@InputType()
export class NestedEnumReviewCardLinkModeWithAggregatesFilter {

    @Field(() => ReviewCardLinkMode, {nullable:true})
    equals?: keyof typeof ReviewCardLinkMode;

    @Field(() => [ReviewCardLinkMode], {nullable:true})
    in?: Array<keyof typeof ReviewCardLinkMode>;

    @Field(() => [ReviewCardLinkMode], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardLinkMode>;

    @Field(() => NestedEnumReviewCardLinkModeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewCardLinkModeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewCardLinkModeFilter, {nullable:true})
    _min?: NestedEnumReviewCardLinkModeFilter;

    @Field(() => NestedEnumReviewCardLinkModeFilter, {nullable:true})
    _max?: NestedEnumReviewCardLinkModeFilter;
}
