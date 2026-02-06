import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateManyProjectInput } from './review-card-premium-request-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardPremiumRequestCreateManyProjectInputEnvelope {

    @Field(() => [ReviewCardPremiumRequestCreateManyProjectInput], {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateManyProjectInput)
    data!: Array<ReviewCardPremiumRequestCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
