import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestUpdateManyMutationInput } from './review-card-premium-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';

@ArgsType()
export class UpdateManyReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateManyMutationInput)
    data!: ReviewCardPremiumRequestUpdateManyMutationInput;

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereInput)
    where?: ReviewCardPremiumRequestWhereInput;
}
