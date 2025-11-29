import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRatingsAsBuyerInput } from '../user/user-create-nested-one-without-ratings-as-buyer.input';

@InputType()
export class RatingCreateWithoutSellerInput {

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutRatingsAsBuyerInput, {nullable:false})
    buyer!: UserCreateNestedOneWithoutRatingsAsBuyerInput;
}
