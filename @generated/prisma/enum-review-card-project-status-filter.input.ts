import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from './review-card-project-status.enum';
import { NestedEnumReviewCardProjectStatusFilter } from './nested-enum-review-card-project-status-filter.input';

@InputType()
export class EnumReviewCardProjectStatusFilter {

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    equals?: keyof typeof ReviewCardProjectStatus;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => NestedEnumReviewCardProjectStatusFilter, {nullable:true})
    not?: NestedEnumReviewCardProjectStatusFilter;
}
