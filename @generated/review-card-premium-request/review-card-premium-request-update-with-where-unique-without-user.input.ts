import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestUpdateWithoutUserInput } from './review-card-premium-request-update-without-user.input';

@InputType()
export class ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardPremiumRequestUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateWithoutUserInput)
    data!: ReviewCardPremiumRequestUpdateWithoutUserInput;
}
