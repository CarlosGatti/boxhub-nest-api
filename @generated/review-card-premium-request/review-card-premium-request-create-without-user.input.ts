import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';
import { ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput } from '../review-card-project/review-card-project-create-nested-one-without-premium-requests.input';

@InputType()
export class ReviewCardPremiumRequestCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    notes!: string;

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    status?: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput, {nullable:true})
    project?: ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput;
}
