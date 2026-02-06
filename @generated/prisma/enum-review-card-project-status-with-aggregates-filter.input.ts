import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from './review-card-project-status.enum';
import { NestedEnumReviewCardProjectStatusWithAggregatesFilter } from './nested-enum-review-card-project-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReviewCardProjectStatusFilter } from './nested-enum-review-card-project-status-filter.input';

@InputType()
export class EnumReviewCardProjectStatusWithAggregatesFilter {

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    equals?: keyof typeof ReviewCardProjectStatus;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => NestedEnumReviewCardProjectStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReviewCardProjectStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReviewCardProjectStatusFilter, {nullable:true})
    _min?: NestedEnumReviewCardProjectStatusFilter;

    @Field(() => NestedEnumReviewCardProjectStatusFilter, {nullable:true})
    _max?: NestedEnumReviewCardProjectStatusFilter;
}
