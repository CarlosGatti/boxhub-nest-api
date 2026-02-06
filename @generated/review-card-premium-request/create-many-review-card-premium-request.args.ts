import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateManyInput } from './review-card-premium-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardPremiumRequestArgs {

    @Field(() => [ReviewCardPremiumRequestCreateManyInput], {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateManyInput)
    data!: Array<ReviewCardPremiumRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
