import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;
}
