import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestUpdateInput } from './review-card-premium-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestUpdateInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateInput)
    data!: ReviewCardPremiumRequestUpdateInput;

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;
}
