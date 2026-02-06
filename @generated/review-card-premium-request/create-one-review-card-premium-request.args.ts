import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateInput } from './review-card-premium-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestCreateInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateInput)
    data!: ReviewCardPremiumRequestCreateInput;
}
