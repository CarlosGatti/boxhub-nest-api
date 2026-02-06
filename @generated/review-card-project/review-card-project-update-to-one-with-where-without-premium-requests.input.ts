import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutPremiumRequestsInput } from './review-card-project-update-without-premium-requests.input';

@InputType()
export class ReviewCardProjectUpdateToOneWithWhereWithoutPremiumRequestsInput {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectUpdateWithoutPremiumRequestsInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutPremiumRequestsInput)
    data!: ReviewCardProjectUpdateWithoutPremiumRequestsInput;
}
