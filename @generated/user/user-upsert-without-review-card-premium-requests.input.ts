import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewCardPremiumRequestsInput } from './user-update-without-review-card-premium-requests.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardPremiumRequestsInput } from './user-create-without-review-card-premium-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewCardPremiumRequestsInput {

    @Field(() => UserUpdateWithoutReviewCardPremiumRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCardPremiumRequestsInput)
    update!: UserUpdateWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserCreateWithoutReviewCardPremiumRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardPremiumRequestsInput)
    create!: UserCreateWithoutReviewCardPremiumRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
