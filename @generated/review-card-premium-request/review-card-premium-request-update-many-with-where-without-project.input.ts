import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestScalarWhereInput } from './review-card-premium-request-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestUpdateManyMutationInput } from './review-card-premium-request-update-many-mutation.input';

@InputType()
export class ReviewCardPremiumRequestUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ReviewCardPremiumRequestScalarWhereInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestScalarWhereInput)
    where!: ReviewCardPremiumRequestScalarWhereInput;

    @Field(() => ReviewCardPremiumRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateManyMutationInput)
    data!: ReviewCardPremiumRequestUpdateManyMutationInput;
}
