import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectUpdateWithoutPremiumRequestsInput } from './review-card-project-update-without-premium-requests.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutPremiumRequestsInput } from './review-card-project-create-without-premium-requests.input';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@InputType()
export class ReviewCardProjectUpsertWithoutPremiumRequestsInput {

    @Field(() => ReviewCardProjectUpdateWithoutPremiumRequestsInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutPremiumRequestsInput)
    update!: ReviewCardProjectUpdateWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectCreateWithoutPremiumRequestsInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutPremiumRequestsInput)
    create!: ReviewCardProjectCreateWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;
}
