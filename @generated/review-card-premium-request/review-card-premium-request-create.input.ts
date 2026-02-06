import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';
import { UserCreateNestedOneWithoutReviewCardPremiumRequestsInput } from '../user/user-create-nested-one-without-review-card-premium-requests.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput } from '../review-card-project/review-card-project-create-nested-one-without-premium-requests.input';

@InputType()
export class ReviewCardPremiumRequestCreateInput {

    @Field(() => String, {nullable:false})
    notes!: string;

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    status?: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReviewCardPremiumRequestsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutReviewCardPremiumRequestsInput)
    user!: UserCreateNestedOneWithoutReviewCardPremiumRequestsInput;

    @Field(() => ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput, {nullable:true})
    project?: ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput;
}
