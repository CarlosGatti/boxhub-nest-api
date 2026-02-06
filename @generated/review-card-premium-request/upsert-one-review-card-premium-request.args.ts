import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateInput } from './review-card-premium-request-create.input';
import { ReviewCardPremiumRequestUpdateInput } from './review-card-premium-request-update.input';

@ArgsType()
export class UpsertOneReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardPremiumRequestCreateInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateInput)
    create!: ReviewCardPremiumRequestCreateInput;

    @Field(() => ReviewCardPremiumRequestUpdateInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateInput)
    update!: ReviewCardPremiumRequestUpdateInput;
}
