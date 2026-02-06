import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereInput)
    where?: ReviewCardPremiumRequestWhereInput;
}
