import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCardPremiumRequestsInput } from './user-create-without-review-card-premium-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCardPremiumRequestsInput } from './user-create-or-connect-without-review-card-premium-requests.input';
import { UserUpsertWithoutReviewCardPremiumRequestsInput } from './user-upsert-without-review-card-premium-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewCardPremiumRequestsInput } from './user-update-to-one-with-where-without-review-card-premium-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewCardPremiumRequestsNestedInput {

    @Field(() => UserCreateWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCardPremiumRequestsInput)
    create?: UserCreateWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCardPremiumRequestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserUpsertWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewCardPremiumRequestsInput)
    upsert?: UserUpsertWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewCardPremiumRequestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewCardPremiumRequestsInput)
    update?: UserUpdateToOneWithWhereWithoutReviewCardPremiumRequestsInput;
}
