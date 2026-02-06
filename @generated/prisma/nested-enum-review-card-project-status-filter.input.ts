import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from './review-card-project-status.enum';

@InputType()
export class NestedEnumReviewCardProjectStatusFilter {

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    equals?: keyof typeof ReviewCardProjectStatus;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    in?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => [ReviewCardProjectStatus], {nullable:true})
    notIn?: Array<keyof typeof ReviewCardProjectStatus>;

    @Field(() => NestedEnumReviewCardProjectStatusFilter, {nullable:true})
    not?: NestedEnumReviewCardProjectStatusFilter;
}
