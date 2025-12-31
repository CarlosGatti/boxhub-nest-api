import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRatingsAsSellerInput } from '../user/user-create-nested-one-without-ratings-as-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class RatingCreateWithoutBuyerInput {

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRatingsAsSellerInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRatingsAsSellerInput)
    seller!: UserCreateNestedOneWithoutRatingsAsSellerInput;
}
