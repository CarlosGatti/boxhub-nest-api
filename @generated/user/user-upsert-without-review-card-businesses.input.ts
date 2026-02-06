import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewCardBusinessesInput } from './user-update-without-review-card-businesses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardBusinessesInput } from './user-create-without-review-card-businesses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReviewCardBusinessesInput {

    @Field(() => UserUpdateWithoutReviewCardBusinessesInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCardBusinessesInput)
    update!: UserUpdateWithoutReviewCardBusinessesInput;

    @Field(() => UserCreateWithoutReviewCardBusinessesInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardBusinessesInput)
    create!: UserCreateWithoutReviewCardBusinessesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
