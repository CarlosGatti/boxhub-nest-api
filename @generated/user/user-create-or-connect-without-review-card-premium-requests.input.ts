import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardPremiumRequestsInput } from './user-create-without-review-card-premium-requests.input';

@InputType()
export class UserCreateOrConnectWithoutReviewCardPremiumRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutReviewCardPremiumRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardPremiumRequestsInput)
    create!: UserCreateWithoutReviewCardPremiumRequestsInput;
}
