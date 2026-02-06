import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateManyUserInput } from './review-card-premium-request-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardPremiumRequestCreateManyUserInputEnvelope {

    @Field(() => [ReviewCardPremiumRequestCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateManyUserInput)
    data!: Array<ReviewCardPremiumRequestCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
