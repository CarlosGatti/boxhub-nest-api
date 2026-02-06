import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardLinkMode } from './review-card-link-mode.enum';

@InputType()
export class NestedEnumReviewCardLinkModeFilter {

    @Field(() => ReviewCardLinkMode, {nullable:true})
    equals?: keyof typeof ReviewCardLinkMode;

    @Field(() => [ReviewCardLinkMode], {nullable:true})
    in?: Array<keyof typeof ReviewCardLinkMode>;

    @Field(() => [ReviewCardLinkMode], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardLinkMode>;

    @Field(() => NestedEnumReviewCardLinkModeFilter, {nullable:true})
    not?: NestedEnumReviewCardLinkModeFilter;
}
