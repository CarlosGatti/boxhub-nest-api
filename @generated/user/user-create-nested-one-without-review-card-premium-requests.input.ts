import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCardPremiumRequestsInput } from './user-create-without-review-card-premium-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCardPremiumRequestsInput } from './user-create-or-connect-without-review-card-premium-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewCardPremiumRequestsInput {

    @Field(() => UserCreateWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCardPremiumRequestsInput)
    create?: UserCreateWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCardPremiumRequestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
