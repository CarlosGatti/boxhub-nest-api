import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutPremiumRequestsInput } from './review-card-project-create-without-premium-requests.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutPremiumRequestsInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutPremiumRequestsInput)
    create!: ReviewCardProjectCreateWithoutPremiumRequestsInput;
}
