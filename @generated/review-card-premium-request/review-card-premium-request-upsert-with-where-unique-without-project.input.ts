import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestUpdateWithoutProjectInput } from './review-card-premium-request-update-without-project.input';
import { ReviewCardPremiumRequestCreateWithoutProjectInput } from './review-card-premium-request-create-without-project.input';

@InputType()
export class ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardPremiumRequestUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestUpdateWithoutProjectInput)
    update!: ReviewCardPremiumRequestUpdateWithoutProjectInput;

    @Field(() => ReviewCardPremiumRequestCreateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateWithoutProjectInput)
    create!: ReviewCardPremiumRequestCreateWithoutProjectInput;
}
