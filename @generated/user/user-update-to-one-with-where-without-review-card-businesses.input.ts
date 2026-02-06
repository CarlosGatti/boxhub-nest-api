import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReviewCardBusinessesInput } from './user-update-without-review-card-businesses.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReviewCardBusinessesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReviewCardBusinessesInput, {nullable:false})
    @Type(() => UserUpdateWithoutReviewCardBusinessesInput)
    data!: UserUpdateWithoutReviewCardBusinessesInput;
}
