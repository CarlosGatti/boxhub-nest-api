import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateWithoutProjectInput } from './review-card-premium-request-create-without-project.input';

@InputType()
export class ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput {

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardPremiumRequestCreateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardPremiumRequestCreateWithoutProjectInput)
    create!: ReviewCardPremiumRequestCreateWithoutProjectInput;
}
