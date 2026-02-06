import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestUpdateWithoutProjectInput } from './review-card-premium-request-update-without-project.input';

@InputType()
export class ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardPremiumRequestUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateWithoutProjectInput)
    data!: ReviewCardPremiumRequestUpdateWithoutProjectInput;
}
