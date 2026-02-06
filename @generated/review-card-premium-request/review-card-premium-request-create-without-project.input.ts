import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';
import { UserCreateNestedOneWithoutReviewCardPremiumRequestsInput } from '../user/user-create-nested-one-without-review-card-premium-requests.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardPremiumRequestCreateWithoutProjectInput {

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
}
